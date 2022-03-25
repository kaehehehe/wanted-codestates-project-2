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
import MatchTypeBtn from '../../components/MatchTypeBtn';
import NothingMatchData from '../../components/User/NothingMatchData';

const User = () => {
  const { nickname } = useParams();
  const { userSoloMatchData, userTeamMatchData } = useContext(GlobalContext);
  const [matchType, setMatchType] = useState('개인전');
  const [matchCourse, setMatchCourse] = useState('통합');

  const [removeRetire, setRemoveRetire] = useState(false);


  const removeRetireMatch = (data) => {
    const result = data.filter((item) => item.player.matchRetired !== '1');
    return result;
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

  const findTrackName = (trackId) => {
    const track = TRACK_DATA.filter((item) => item.id === trackId);
    return track[0].name;
  };

  const findKartName = (kartId) => {
    const track = KART_DATA.filter((item) => item.id === kartId);
    return track[0]?.name;
  };


  const filteringData = (data) => {
    if (matchType === '개인전' && matchCourse === '통합') {
      const speedIndiCombine = data.filter(
        (item) => item.channelName === 'speedIndiCombine'
      );
      return speedIndiCombine;
    } else if (matchType === '개인전' && matchCourse === '무한부스터') {
      const speedIndiInfinit = data.filter(
        (item) => item.channelName === 'speedIndiInfinit'
      );
      return speedIndiInfinit;
    } else if (matchType === '팀전' && matchCourse === '통합') {
      const speedTeamCombine = data.filter(
        (item) => item.channelName === 'speedTeamCombine'
      );
      return speedTeamCombine;
    } else {
      const speedTeamInfinit = data.filter(
        (item) => item.channelName === 'speedTeamInfinit'
      );
      return speedTeamInfinit;
    }
  };

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
              />
            )}
            {matchType === '팀전' && (
              <UserMain
                matchType={matchType}
                setMatchType={setMatchType}
                nickname={nickname}
              />
            )}
          </S.UserMain>
          <S.GraphData>
            {matchType === '개인전' && <TotalRecord data={userSoloMatchData} />}
            {matchType === '팀전' && <TotalRecord data={userTeamMatchData} />}
            <S.LineChartWrapper>
              {matchType === '개인전' && (
                <LineChart
                  rankData={getTransitionOfTheRank(userSoloMatchData)}
                />
              )}
              {matchType === '팀전' && (
                <LineChart
                  rankData={getTransitionOfTheRank(userTeamMatchData)}
                />
              )}
            </S.LineChartWrapper>
          </S.GraphData>
          <S.MatchingSimulator>
            <span>
              1대1 매칭 시뮬레이터 - '{nickname}' 와 가상 대결을 펼쳐보세요.
            </span>
            <button>매칭하기</button>
          </S.MatchingSimulator>
          <S.ListController>
            <MatchTypeBtn
              matchType={matchCourse}
              setMatchType={setMatchCourse}
              text_1="통합"
              text_2="무한부스터"
            />
            <S.ToggleWrapper>
              <p>리타이어 제외</p>
              <Toggle show={removeRetire} setShow={setRemoveRetire} />
            </S.ToggleWrapper>
          </S.ListController>
          {matchType === '개인전' &&
          matchCourse === '통합' &&
          filteringData(userSoloMatchData).length === 0 ? (
            <NothingMatchData />
          ) : (
            filteringData(userSoloMatchData).map((data) => (
              <MatchRecord
                key={data.matchId}
                endTime={convertDataIntoAgo(data.endTime)}
                rank={data.player.matchRank}
                playerCount={data.playerCount}
                track={findTrackName(data.trackId)}
                kart={findKartName(data.player.kart)}
                matchTime={convertDataIntoTime(data.player.matchTime)}
              />
            ))
          )}
          {matchType === '개인전' &&
          matchCourse === '무한부스터' &&
          filteringData(userSoloMatchData).length === 0 ? (
            <NothingMatchData />
          ) : (
            filteringData(userSoloMatchData).map((data) => (
              <MatchRecord
                key={data.matchId}
                endTime={convertDataIntoAgo(data.endTime)}
                rank={data.player.matchRank}
                playerCount={data.playerCount}
                track={findTrackName(data.trackId)}
                kart={findKartName(data.player.kart)}
                matchTime={convertDataIntoTime(data.player.matchTime)}
              />
            ))
          )}
          {matchType === '팀전' &&
          matchCourse === '통합' &&
          filteringData(userTeamMatchData).length === 0 ? (
            <NothingMatchData />
          ) : (
            filteringData(userTeamMatchData).map((data) => (
              <MatchRecord
                key={data.matchId}
                endTime={convertDataIntoAgo(data.endTime)}
                rank={data.player.matchRank}
                playerCount={data.playerCount}
                track={findTrackName(data.trackId)}
                kart={findKartName(data.player.kart)}
                matchTime={convertDataIntoTime(data.player.matchTime)}
              />
            ))
          )}
          {matchType === '팀전' &&
          matchCourse === '무한부스터' &&
          filteringData(userTeamMatchData).length === 0 ? (
            <NothingMatchData />
          ) : (
            filteringData(userTeamMatchData).map((data) => (
              <MatchRecord
                key={data.matchId}
                endTime={convertDataIntoAgo(data.endTime)}
                rank={data.player.matchRank}
                playerCount={data.playerCount}
                track={findTrackName(data.trackId)}
                kart={findKartName(data.player.kart)}
                matchTime={convertDataIntoTime(data.player.matchTime)}
              />
            ))
          )}
        </S.Container>
      )}
    </>
  );
};

export default User;
