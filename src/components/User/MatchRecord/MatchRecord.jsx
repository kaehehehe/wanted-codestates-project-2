import React from 'react';

import * as S from './style';
const MatchRecord = ({
  endTime,
  rank,
  playerCount,
  track,
  kart,
  matchTime,
}) => {
  const setBackgroundColor = () => {
    if (rank === '1') return '#0177FF';
    if (rank === '99' ) return '#F62458';
    if(rank === '') return 'gray';
  };

  return (
    <S.MatchRecord bgColor={setBackgroundColor()}>
      <S.EndTime>{endTime}</S.EndTime>
      <S.Rank>
        {rank === '99' && '리타이어'}
        {rank === '' && '중도이탈'}
        {rank !== '99' && rank !== '' && (
          <span>
            <strong>{rank}</strong> / {playerCount}
          </span>
        )}
      </S.Rank>
      <S.Track>{track}</S.Track>
      <S.Kart>{kart}</S.Kart>
      <S.MatchTime>
        {rank === '99' || rank === '' ? '-' : matchTime}
      </S.MatchTime>
    </S.MatchRecord>
  );
};

export default MatchRecord;
