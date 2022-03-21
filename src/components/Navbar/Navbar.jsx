import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import Search from '../Search';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <S.NavbarContainer>
        <S.Navbar>
          <S.Nav>
            <Link to="/ranking">랭킹</Link>
            <Link
              to="/track/solo"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              트랙
            </Link>
          </S.Nav>
          <Search />
        </S.Navbar>
      </S.NavbarContainer>
      <S.NavMenuContainer>
        <S.NavMenu
          isHover={isHover}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link to="/track/solo">스피드개인전</Link>
          <Link to="/track/team">스피드팀전</Link>
        </S.NavMenu>
      </S.NavMenuContainer>
    </>
  );
};

export default Navbar;
