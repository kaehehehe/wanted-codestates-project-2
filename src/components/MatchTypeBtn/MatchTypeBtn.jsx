import React from 'react';

import * as S from './style';

const MatchTypeBtn = ({ matchType, setMatchType, text_1, text_2 }) => {
  return (
    <S.Buttons>
      <S.LeftBtn
        active={matchType === text_1}
        onClick={() => setMatchType(text_1)}
      >
        {text_1}
      </S.LeftBtn>
      <S.RightBtn
        active={matchType === text_2}
        onClick={() => setMatchType(text_2)}
      >
        {text_2}
      </S.RightBtn>
    </S.Buttons>
  );
};

export default MatchTypeBtn;
