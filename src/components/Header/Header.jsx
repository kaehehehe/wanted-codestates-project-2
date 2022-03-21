import React from 'react';

import * as S from './style';
import KartLogo from '../../assets/kart_logo.png';
import TmiLogo from '../../assets/tmi_logo.png';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

const Header = ({ theme, setTheme }) => {
  const handleClickThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <S.Header>
      <S.Logo>
        <img src={KartLogo} />
        <img src={TmiLogo} />
      </S.Logo>
      <S.Wrapper>
        <S.Link href="https://kart.nexon.com/Main/Index.aspx" target="_blank">
          카트라이더홈페이지 바로가기
        </S.Link>
        <S.ThemeToggle onClick={handleClickThemeToggle}>
          {theme === 'light' ? (
            <Sun width="20px" fill="#212529" />
          ) : (
            <Moon fill="#ECECEC" width="20px" />
          )}
        </S.ThemeToggle>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
