import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';
import UserMain from '../../components/User/UserMain';
import { GlobalContext } from '../../App';
import MatchRecord from '../../components/User/MatchRecord';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoTime } from '../../utils/convertDataIntoTime';
import { track as TRACK_DATA } from '../../assets/metadata/track';
import { kart as KART_DATA } from '../../assets/metadata/kart';
import Toggle from '../../components/Toggle/Toggle';
import TotalRecord from '../../components/User/TotalRecord/TotalRecord';
import LineChart from '../../components/LineChart';

const User = () => {
  const { nickname } = useParams();
  const [matchType, setMatchType] = useState('개인전');

  const { userSoloMatchData, userTeamMatchData } = useContext(GlobalContext);
  const [favoriteMode, setFavoriteMode] = useState('');

  const [removeRetire, setRemoveRetire] = useState(false);
  const [removeRetireSoloData, setRetireSoloData] = useState([]);
  const [removeRetireTeamData, setRetireTeamData] = useState([]);

  const findTrackName = (trackId) => {
    const track = TRACK_DATA.filter((item) => item.id === trackId);
    return track[0].name;
  };

  const findKartName = (kartId) => {
    const track = KART_DATA.filter((item) => item.id === kartId);
    return track[0]?.name;
  };

  const findFavoriteMode = (data) => {
    switch (matchType) {
      case '개인전':
        const speedIndiCombine = data.filter(
          (item) => item.channelName === 'speedIndiCombine'
        );
        const speedIndiInfinit = data.filter(
          (item) => item.channelName === 'speedIndiInfinit'
        );
        if (speedIndiCombine >= speedIndiInfinit) {
          return '통합';
        } else {
          return '무한부스터';
        }
      case '팀전':
        const speedTeamCombine = data.filter(
          (item) => item.channelName === 'speedTeamCombine'
        );
        const speedTeamInfinit = data.filter(
          (item) => item.channelName === 'speedTeamInfinit'
        );
        if (speedTeamCombine >= speedTeamInfinit) {
          return '통합';
        } else {
          return '무한부스터';
        }
      default:
    }
  };

  const removeRetireMatch = (data) => {
    const result = data.filter((item) => item.player.matchRetired !== '1');
    return result;
  };

  const calculateWin = (data) => {
    const total = data.length;
    const win = data.filter((item) => item.player.matchWin === '1');
    return Math.round((win.length / total) * 100);
  };

  const calculateGoalIn = (data) => {
    const total = data.length;
    const goalIn = data.filter((item) => Number(item.player.matchRank) <= 8);
    return Math.round((goalIn.length / total) * 100);
  };

  const calculateRetire = (data) => {
    const total = data.length;
    const retire = data.filter((item) => item.player.matchRetired === '1');
    return Math.round((retire.length / total) * 100);
  };

  const calculateDropout = (data) => {
    const total = data.length;
    const retire = data.filter((item) => item.player.matchRank === '');
    return Math.round((retire.length / total) * 100);
  };

  const getTransitionOfTheRank = (data) => {
    const result = [];
    for (let item of data) {
      if (result.length === 50) return result;
      const matchRank = item.player.matchRank;
      if (matchRank !== '99' && matchRank !== '') {
        result.push(Number(matchRank));
      }
    }
    return result;
  };

  useEffect(() => {
    let result;
    switch (matchType) {
      case '개인전':
        result = findFavoriteMode(userSoloMatchData);
        setFavoriteMode(result);
        break;
      case '팀전':
        result = findFavoriteMode(userTeamMatchData);
        setFavoriteMode(result);
        break;
      default:
    }
  }, [matchType]);

  useEffect(() => {
    if (userSoloMatchData) {
      const result = removeRetireMatch(userSoloMatchData);
      setRetireSoloData(result);
    }

    if (userTeamMatchData) {
      const result = removeRetireMatch(userTeamMatchData);
      setRetireTeamData(result);
    }
  }, [removeRetire]);

  return (
    <>
      {userSoloMatchData && userTeamMatchData && (
        <S.Container>
          <S.UserMain>
            {matchType === '개인전' && (
              <UserMain
                matchType={matchType}
                setMatchType={setMatchType}
                nickname={nickname}
                imgId={userSoloMatchData[0].character}
              />
            )}
            {matchType === '팀전' && (
              <UserMain
                matchType={matchType}
                setMatchType={setMatchType}
                nickname={nickname}
                imgId={userTeamMatchData[0].character}
              />
            )}

            {matchType === '개인전' && (
              <TotalRecord
                win={calculateWin(userSoloMatchData)}
                goalIn={calculateGoalIn(userSoloMatchData)}
                retire={calculateRetire(userSoloMatchData)}
                dropout={calculateDropout(userSoloMatchData)}
              />
            )}
            {matchType === '팀전' && (
              <TotalRecord
                win={calculateWin(userTeamMatchData)}
                goalIn={calculateGoalIn(userTeamMatchData)}
                retire={calculateRetire(userTeamMatchData)}
                dropout={calculateDropout(userTeamMatchData)}
              />
            )}
          </S.UserMain>
          <S.LineChartWrapper>
            {matchType === '개인전' && (
              <LineChart rankData={getTransitionOfTheRank(userSoloMatchData)} />
            )}
            {matchType === '팀전' && (
              <LineChart rankData={getTransitionOfTheRank(userTeamMatchData)} />
            )}
          </S.LineChartWrapper>
          <S.MatchingSimulator>
            <span>
              1대1 매칭 시뮬레이터 - '{nickname}' 와 가상 대결을 펼쳐보세요.
            </span>
            <button>매칭하기</button>
          </S.MatchingSimulator>
          <S.FavoriteMode>최다주행 모드 {favoriteMode}</S.FavoriteMode>
          <S.MatchRecordList>
            <S.ToggleWrapper>
              <p>리타이어 제외</p>
              <Toggle show={removeRetire} setShow={setRemoveRetire} />
            </S.ToggleWrapper>
            {matchType === '개인전' &&
              removeRetire &&
              removeRetireSoloData.map((data) => (
                <MatchRecord
                  key={data.matchId}
                  endTime={convertDataIntoAgo(data.endTime)}
                  rank={data.player.matchRank}
                  playerCount={data.playerCount}
                  track={findTrackName(data.trackId)}
                  kart={findKartName(data.player.kart)}
                  matchTime={convertDataIntoTime(data.player.matchTime)}
                />
              ))}
            {matchType === '개인전' &&
              !removeRetire &&
              userSoloMatchData.map((data) => (
                <MatchRecord
                  key={data.matchId}
                  endTime={convertDataIntoAgo(data.endTime)}
                  rank={data.player.matchRank}
                  playerCount={data.playerCount}
                  track={findTrackName(data.trackId)}
                  kart={findKartName(data.player.kart)}
                  matchTime={convertDataIntoTime(data.player.matchTime)}
                />
              ))}
            {matchType === '팀전' &&
              removeRetire &&
              removeRetireTeamData.map((data) => (
                <MatchRecord
                  key={data.matchId}
                  endTime={convertDataIntoAgo(data.endTime)}
                  rank={data.player.matchRank}
                  playerCount={data.playerCount}
                  track={findTrackName(data.trackId)}
                  kart={findKartName(data.player.kart)}
                  matchTime={convertDataIntoTime(data.player.matchTime)}
                />
              ))}
            {matchType === '팀전' &&
              !removeRetire &&
              userTeamMatchData.map((data) => (
                <MatchRecord
                  key={data.matchId}
                  endTime={convertDataIntoAgo(data.endTime)}
                  rank={data.player.matchRank}
                  playerCount={data.playerCount}
                  track={findTrackName(data.trackId)}
                  kart={findKartName(data.player.kart)}
                  matchTime={convertDataIntoTime(data.player.matchTime)}
                />
              ))}
          </S.MatchRecordList>
        </S.Container>
      )}
    </>
  );
};

export default User;
