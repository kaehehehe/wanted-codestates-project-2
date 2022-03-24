import React, { useState } from 'react';

import * as S from './style';
import MatchTypeBtn from '../../components/MatchTypeBtn/MatchTypeBtn';
import Card from '../../components/Ranking/Card';
import List from '../../components/Ranking/List';
import { speedIndiCombineRanking } from '../../mock/speedIndiCombineRanking';
import { speedIndiInfinitRanking } from '../../mock/speedIndiInfinitRanking';
import { speedTeamCombineRanking } from '../../mock/speedTeamCombineRanking';
import { speedTeamInfinitRanking } from '../../mock/speedTeamInfinitRanking';

const Ranking = () => {
  const [matchType, setMatchType] = useState('개인전');
  const [matchCourse, setMatchCourse] = useState('통합');

  return (
    <S.Container>
      <S.ButtonWrapper>
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
      </S.ButtonWrapper>
      <S.CardWrapper>
        {matchType === '개인전' &&
          matchCourse === '통합' &&
          speedIndiCombineRanking.map((item, index) => {
            if (index <= 2) return <Card key={item.nickname} data={item} />;
          })}
        {matchType === '개인전' &&
          matchCourse === '무한부스터' &&
          speedIndiInfinitRanking.map((item, index) => {
            if (index <= 2) return <Card key={item.nickname} data={item} />;
          })}
        {matchType === '팀전' &&
          matchCourse === '통합' &&
          speedTeamCombineRanking.map((item, index) => {
            if (index <= 2) return <Card key={item.nickname} data={item} />;
          })}
        {matchType === '팀전' &&
          matchCourse === '무한부스터' &&
          speedTeamInfinitRanking.map((item, index) => {
            if (index <= 2) return <Card key={item.nickname} data={item} />;
          })}
      </S.CardWrapper>
      <S.ListWrapper>
        {matchType === '개인전' &&
          matchCourse === '통합' &&
          speedIndiCombineRanking.map((item, index) => {
            if (index >= 3) return <List key={item.nickname} data={item} />;
          })}
        {matchType === '개인전' &&
          matchCourse === '무한부스터' &&
          speedIndiInfinitRanking.map((item, index) => {
            if (index >= 3) return <List key={item.nickname} data={item} />;
          })}
        {matchType === '팀전' &&
          matchCourse === '통합' &&
          speedTeamCombineRanking.map((item, index) => {
            if (index >= 3) return <List key={item.nickname} data={item} />;
          })}
        {matchType === '팀전' &&
          matchCourse === '무한부스터' &&
          speedTeamInfinitRanking.map((item, index) => {
            if (index >= 3) return <List key={item.nickname} data={item} />;
          })}
      </S.ListWrapper>
    </S.Container>
  );
};

export default Ranking;
