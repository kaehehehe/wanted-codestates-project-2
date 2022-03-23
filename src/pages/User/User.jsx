import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';
import Header from '../../components/User/Header';
import { GlobalContext } from '../../App';
import MatchRecord from '../../components/User/MatchRecord';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoTime } from '../../utils/convertDataIntoTime';
import { track as TRACK_DATA } from '../../assets/metadata/track';
import { kart as KART_DATA } from '../../assets/metadata/kart';
import Toggle from '../../components/Toggle/Toggle';

const User = () => {
  const [matchType, setMatchType] = useState('solo');
  const { nickname } = useParams();
  const { useSoloMatchData, useTeamMatchData } = useContext(GlobalContext);

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

  useEffect(() => {
    if (useSoloMatchData) {
      const result = removeRetireMatch(useSoloMatchData);
      setRetireSoloData(result);
    }

    if (useTeamMatchData) {
      const result = removeRetireMatch(useTeamMatchData);
      setRetireTeamData(result);
    }
  }, []);

  return (
    <>
      {useSoloMatchData && useTeamMatchData && (
        <S.Container>
          <Header
            matchType={matchType}
            setMatchType={setMatchType}
            nickname={nickname}
          />
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
              useSoloMatchData.map((data) => (
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
              useTeamMatchData.map((data) => (
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
