import React, { useEffect, useState } from 'react';

import * as S from './style';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';

const TotalRecord = ({ data }) => {

  const [win, setWin] = useState(null);
  const [goalIn, setGoalIn] = useState(null);
  const [retire, setRetire] = useState(null);
  const [dropout, setDropout] = useState(null);

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
    setWin(calculateWin(data));
    setGoalIn(calculateGoalIn(data));
    setRetire(calculateRetire(data));
    setDropout(calculateDropout(data));
  }, [data]);

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
