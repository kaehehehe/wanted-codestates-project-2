import React from 'react';
import Gold from '../../../assets/images/goldmedal.png';
import Silver from '../../../assets/images/silvermedal.png';
import Bronze from '../../../assets/images/bronzemedal.png';

import * as S from './style';
import CircularProgressbar from '../../CircularProgressBar';

const Card = ({ data }) => {
  const setMedalIcon = () => {
    switch (data.rank) {
      case 1:
        return Gold;
      case 2:
        return Silver;
      case 3:
        return Bronze;
      default:
    }
  };
  return (
    <S.Card>
      <S.MedalIcon src={setMedalIcon()} alt="medal icon" />
      <S.Nickname>{data.nickname}</S.Nickname>
      <S.Point>
        누적 포인트 <strong>{data.point.toLocaleString()}PT</strong>
      </S.Point>
      <S.CircularProgressbarWrapper>
        <S.CircularProgressbar>
          <div>승률</div>
          <CircularProgressbar color="#0177FF" value={data.win} />
        </S.CircularProgressbar>
        <S.CircularProgressbar>
          <div>리타이어율</div>
          <CircularProgressbar color="#F62458" value={data.retire} />
        </S.CircularProgressbar>
      </S.CircularProgressbarWrapper>
    </S.Card>
  );
};

export default Card;
