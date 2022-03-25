import React from 'react';

import * as S from './style';
import { track as TRACK_DATA } from '../../../assets/metadata/track';
import { kart as KART_DATA } from '../../../assets/metadata/kart';
import { convertDataIntoAgo } from '../../../utils/convertDataIntoAgo';
import { convertDataIntoTime } from '../../../utils/convertDataIntoTime';

const MatchRecord = ({ data }) => {
  const { matchRank, kart, matchTime } = data.player;
  const { endTime, trackId, playerCount } = data;

  const setBackgroundColor = () => {
    if (matchRank === '1') return '#0177FF';
    if (matchRank === '99') return '#F62458';
    if (matchRank === '') return 'gray';
  };

  const findTrackName = (trackId) => {
    const track = TRACK_DATA.filter((item) => item.id === trackId);
    return track[0].name;
  };

  const findKartName = (kartId) => {
    const track = KART_DATA.filter((item) => item.id === kartId);
    return track[0]?.name;
  };

  return (
    <S.MatchRecord bgColor={setBackgroundColor(matchRank)}>
      <S.EndTime>{convertDataIntoAgo(endTime)}</S.EndTime>
      <S.Rank>
        {matchRank === '99' && '리타이어'}
        {matchRank === '' && '중도이탈'}
        {matchRank !== '99' && matchRank !== '' && (
          <span>
            <strong>{matchRank}</strong> / {playerCount}
          </span>
        )}
      </S.Rank>
      <S.Track>{findTrackName(trackId)}</S.Track>
      <S.Kart>{findKartName(kart)}</S.Kart>
      <S.MatchTime>
        {matchRank === '99' || matchRank === ''
          ? '-'
          : convertDataIntoTime(matchTime)}
      </S.MatchTime>
    </S.MatchRecord>
  );
};

export default MatchRecord;
