import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';
import Header from '../../components/User/UserMain';
import { GlobalContext } from '../../App';
import MatchRecord from '../../components/User/MatchRecord';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoTime } from '../../utils/convertDataIntoTime';
import { track as TRACK_DATA } from '../../assets/metadata/track';
import { kart as KART_DATA } from '../../assets/metadata/kart';
import Toggle from '../../components/Toggle/Toggle';
import TotalRecord from '../../components/User/TotalRecord/TotalRecord';

const User = () => {
  const [matchType, setMatchType] = useState('solo');
  const { nickname } = useParams();
  const { userSoloMatchData, userTeamMatchData } = useContext(GlobalContext);

  const [removeRetire, setRemoveRetire] = useState(false);
  const [removeRetireSoloData, setRetireSoloData] = useState([]);
  const [removeRetireTeamData, setRetireTeamData] = useState([]);

  const findTrackName = (trackId) => {
    const track = TRACK_DATA.filter((item) => item.id === trackId);
    return track[0].name;
  };

  const findKartName = (kartId) => {
    const track = KART_DATA.filter((item) => item.id === kartId);
    return track[0].name;
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

  useEffect(() => {
    if (userSoloMatchData) {
      const result = removeRetireMatch(userSoloMatchData);
      setRetireSoloData(result);
    }

    if (userTeamMatchData) {
      const result = removeRetireMatch(userTeamMatchData);
      setRetireTeamData(result);
    }
  }, []);

  return (
    <>
      {userSoloMatchData && userTeamMatchData && (
        <S.Container>
          <S.UserMain>
            <Header
              matchType={matchType}
              setMatchType={setMatchType}
              nickname={nickname}
            />
            {matchType === 'solo' && (
              <TotalRecord
                win={calculateWin(userSoloMatchData)}
                goalIn={calculateGoalIn(userSoloMatchData)}
                retire={calculateRetire(userSoloMatchData)}
                dropout={calculateDropout(userSoloMatchData)}
              />
            )}
            {matchType === 'team' && (
              <TotalRecord
                win={calculateWin(userTeamMatchData)}
                goalIn={calculateGoalIn(userTeamMatchData)}
                retire={calculateRetire(userTeamMatchData)}
                dropout={calculateDropout(userTeamMatchData)}
              />
            )}
          </S.UserMain>
          <S.MatchRecordList>
            <S.ToggleWrapper>
              <p>리타이어 제외</p>
              <Toggle show={removeRetire} setShow={setRemoveRetire} />
            </S.ToggleWrapper>
            {matchType === 'solo' &&
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
            {matchType === 'solo' &&
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
            {matchType === 'team' &&
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
            {matchType === 'team' &&
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
