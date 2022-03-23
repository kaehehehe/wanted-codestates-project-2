import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';
import Header from '../../components/User/Header';
import { GlobalContext } from '../../App';
import MatchRecord from '../../components/User/MatchRecord';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoTime } from '../../utils/convertDataIntoTime';
import { track as TRACK_DATA } from '../../assets/metadata/track';
import { kart as KART_DATA } from '../../assets/metadata/kart';

const User = () => {
  const [matchType, setMatchType] = useState('solo');
  const { nickname } = useParams();
  const { useSoloMatchData, useTeamMatchData } = useContext(GlobalContext);

  const findTrackName = (trackId) => {
    const track = TRACK_DATA.filter((item) => item.id === trackId);
    return track[0].name;
  };

  const findKartName = (kartId) => {
    const track = KART_DATA.filter((item) => item.id === kartId);
    return track[0].name;
  };

  return (
    <>
      {useSoloMatchData && useTeamMatchData && (
        <S.Container>
          <Header
            matchType={matchType}
            setMatchType={setMatchType}
            nickname={nickname}
          />
          {matchType === 'solo' &&
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
        </S.Container>
      )}
    </>
  );
};

export default User;
