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
    <>
      <S.Background>
        <S.Wrapper>
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
        </S.Wrapper>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#016AE4" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#016FED" />
          </g>
        </svg>
      </S.Background>
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
    </>
  );
};

export default Ranking;
