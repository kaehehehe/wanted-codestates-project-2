import React from 'react';
import Character from '../../../assets/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png';
import TotalRecord from '../TotalRecord/TotalRecord';

import * as S from './style';

const Header = ({ matchType, setMatchType, nickname }) => {
  return (
    <S.Header>
      <S.Character src={Character} alt="character" />
      <S.Wrapper>
        <S.Nickname>{nickname}</S.Nickname>
        <S.Buttons>
          <S.SoloBtn matchType={matchType} onClick={()=>setMatchType('solo')}>
            개인전
          </S.SoloBtn>
          <S.TeamBtn matchType={matchType} onClick={()=>setMatchType('team')}>
            팀전
          </S.TeamBtn>
        </S.Buttons>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
