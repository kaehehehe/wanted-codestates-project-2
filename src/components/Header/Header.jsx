import React from 'react';

import * as S from './style';
import KartLogo from '../../assets/kart_logo.png';
import TmiLogo from '../../assets/tmi_logo.png';

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <img src={KartLogo} />
        <img src={TmiLogo} />
      </S.Logo>
      <S.Link href="https://kart.nexon.com/Main/Index.aspx" target="_blank">
        카트라이더홈페이지 바로가기
      </S.Link>
    </S.Header>
  );
};

export default Header;
