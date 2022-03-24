import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import Search from '../Search';

const Navbar = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.Navbar>
          <S.Nav>
            <Link to="/ranking">랭킹</Link>
            <Link to="/track/solo">트랙</Link>
          </S.Nav>
          <Search />
        </S.Navbar>
      </S.NavbarContainer>
    </>
  );
};

export default Navbar;
