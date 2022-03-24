import React from 'react';

import * as S from './style';

const MatchTypeBtn = ({ matchType, setMatchType }) => {
  return (
    <S.Buttons>
      <S.SoloBtn matchType={matchType} onClick={() => setMatchType('solo')}>
        개인전
      </S.SoloBtn>
      <S.TeamBtn matchType={matchType} onClick={() => setMatchType('team')}>
        팀전
      </S.TeamBtn>
    </S.Buttons>
  );
};

export default MatchTypeBtn;
