import React from 'react';

import * as S from './style';

const Header = ({ matchType, setMatchType, nickname, imgId }) => {
  return (
    <S.Header>
      <S.Character
        src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${imgId}.png`}
        alt="character"
      />
      <S.Wrapper>
        <S.Nickname>{nickname}</S.Nickname>
        <S.Buttons>
          <S.SoloBtn matchType={matchType} onClick={() => setMatchType('solo')}>
            개인전
          </S.SoloBtn>
          <S.TeamBtn matchType={matchType} onClick={() => setMatchType('team')}>
            팀전
          </S.TeamBtn>
        </S.Buttons>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
