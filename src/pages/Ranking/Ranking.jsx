import React, { useState } from 'react';

import * as S from './style';
import MatchTypeBtn from '../../components/MatchTypeBtn/MatchTypeBtn';

const Ranking = () => {
  const [matchType, setMatchType] = useState('개인전');
  const [matchCourse, setMatchCourse] = useState('통합');

  return (
    <S.Container>
      <S.Buttons>
        <S.MatchTypeBtn>
          <MatchTypeBtn
            matchType={matchType}
            setMatchType={setMatchType}
            text_1="개인전"
            text_2="팀전"
          />
        </S.MatchTypeBtn>
        <MatchTypeBtn
          matchType={matchCourse}
          setMatchType={setMatchCourse}
          text_1="통합"
          text_2="무한부스터"
        />
      </S.Buttons>
    </S.Container>
  );
};

export default Ranking;
