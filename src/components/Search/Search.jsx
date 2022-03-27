import React, { useRef, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg';
import { GlobalContext } from '../../App';
import Modal from '../Modal/Modal';
import { ModalPortals } from '../../components/Modal/ModalPortals';
const KEY = process.env.REACT_APP_KEY;

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);
  const { setUserSoloMatchData, setUserTeamMatchData } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const searchNickname = async (nickname) => {
    return await axios.get(
      `https://nexonclone.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/${nickname}`,
      {
        headers: { Authorization: KEY },
      }
    );
  };

  const fetchUserSoloData = async (accessId) => {
    return await axios.get(
      `https://nexonclone.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${accessId}/matches/?limit=200&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a`,
      {
        headers: { Authorization: KEY },
      }
    );
  };

  const fetchUserTeamData = async (accessId) => {
    return await axios.get(
      `https://nexonclone.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${accessId}/matches/?limit=200&match_types=effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e`,
      {
        headers: { Authorization: KEY },
      }
    );
  };

  const search = (nickname) => {
    searchNickname(nickname)
      .then((res) => {
        const { accessId } = res.data;
        fetchUserSoloData(accessId).then((res) => {
          setUserSoloMatchData(res.data.matches[0].matches);
        });

        fetchUserTeamData(accessId).then((res) => {
          setUserTeamMatchData(res.data.matches[0].matches);
        });

        navigate(`/user/${nickname}`);
        inputRef.current.value = '';
      })
      .catch((res) => setShowModal(true));
  };

  const handleInput = (e) => {
    const nickname = inputRef.current.value;
    if (e.key === 'Enter') {
      if (nickname === '') return;
      search(nickname);
    }
  };

  const handleClickBtn = () => {
    const nickname = inputRef.current.value;
    if (nickname === '') return;
    search(nickname);
  };

  return (
    <>
      <S.Search isFocus={isFocus}>
        <S.Input
          type="text"
          placeholder={isFocus ? '' : '닉네임 검색'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onKeyUp={(e) => handleInput(e)}
          ref={inputRef}
        />
        <S.SearchBtn onClick={handleClickBtn}>
          <SearchIcon fill={'#8cafe6'} className="icon" />
        </S.SearchBtn>
      </S.Search>
      {showModal && (
        <ModalPortals>
          <Modal
            setShow={setShowModal}
          />
        </ModalPortals>
      )}
    </>
  );
};

export default Search;
