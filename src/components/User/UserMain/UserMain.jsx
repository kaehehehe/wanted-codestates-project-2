import React from 'react';

import * as S from './style';
import MatchTypeBtn from '../../MatchTypeBtn';

const Header = ({ matchType, setMatchType, nickname, imgId }) => {
  return (
    <S.Header>
      <S.Character
        src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${imgId}.png`}
        alt="character"
      />
      <S.Wrapper>
        <S.Nickname>{nickname}</S.Nickname>
        <MatchTypeBtn matchType={matchType} setMatchType={setMatchType} />
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
