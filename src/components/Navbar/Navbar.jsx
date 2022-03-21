import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import Search from '../Search';

const Navbar = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.Nav>
          <Link to="/ranking">랭킹</Link>
          <Link to="/kart">카트</Link>
          <Link to="/track">트랙</Link>
        </S.Nav>
        <Search />
      </S.Navbar>
    </S.Container>
  );
};

export default Navbar;
