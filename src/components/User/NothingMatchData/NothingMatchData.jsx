import React from 'react';

import * as S from './style';
import Img from '../../../assets/images/null.png';

const NothingMatchData = () => {
  return (
    <S.Container>
      <img src={Img} alt="nothing data" />
      <span>전적정보가 없띵</span>
    </S.Container>
  );
};

export default NothingMatchData;
