import React from 'react';

import * as S from './style';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';

const TotalRecord = ({ win, goalIn, retire, dropout }) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>종합 전적</S.Title>
      </S.TitleWrapper>
      <S.CircularProgressBarWrapper>
        <S.CircularProgressBar>
          <S.ProgressBarName>승률</S.ProgressBarName>
          <CircularProgressBar color="#0177FF" value={win} />
        </S.CircularProgressBar>
        <S.CircularProgressBar>
          <S.ProgressBarName>완주율</S.ProgressBarName>
          <CircularProgressBar color="#9BD628" value={goalIn} />
        </S.CircularProgressBar>
        <S.CircularProgressBar>
          <S.ProgressBarName>리타이어율</S.ProgressBarName>
          <CircularProgressBar color="#F62458" value={retire} />
        </S.CircularProgressBar>
        <S.CircularProgressBar>
          <S.ProgressBarName>중도이탈율</S.ProgressBarName>
          <CircularProgressBar color="#FF7700" value={dropout} />
        </S.CircularProgressBar>
      </S.CircularProgressBarWrapper>
    </S.Container>
  );
};

export default TotalRecord;
