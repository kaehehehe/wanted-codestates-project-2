import React, { useRef, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg';
import { GlobalContext } from '../../App';
const KEY = process.env.REACT_APP_KEY;

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const { setUserData } = useContext(GlobalContext);
  const navigate = useNavigate();

  const searchNickname = async (nickname) => {
    return await axios.get(`/kart/v1.0/users/nickname/${nickname}`, {
      headers: { Authorization: KEY },
    });
  };

  const fetchUserData = async (accessId) => {
    return await axios.get(`/kart/v1.0/users/${accessId}/matches/?limit=200`, {
      headers: { Authorization: KEY },
    });
  };

  const search = (nickname) => {
    searchNickname(nickname).then((res) => {
      const { accessId } = res.data;
      fetchUserData(accessId).then((res) => {
        console.log(res.data)
        setUserData(res.data.matches[0].matches);
        navigate(`/user/${nickname}`);
        inputRef.current.value = '';
      });
    });
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
  );
};

export default Search;
