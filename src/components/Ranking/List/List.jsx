import React from 'react';
import { ReactComponent as ArrowUp } from '../../../assets/images/icons/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../../../assets/images/icons/arrowDown.svg';

import * as S from './style';

const List = ({ data }) => {
  return (
    <S.List>
      <S.Rank>{data.rank}</S.Rank>
      <S.NicknameWrapper>
        <S.Nickname>{data.nickname}</S.Nickname>
        {data.rankChange > 0 && (
          <S.ArrowUp>
            <ArrowUp width={10} fill="#0177FF" />
          </S.ArrowUp>
        )}
        {data.rankChange < 0 && (
          <S.ArrowDown>
            <ArrowDown width={10} fill="#F62458" />
          </S.ArrowDown>
        )}
        {data.rankChange === null && <div>-</div>}
        <S.RankChange color={data.rankChange > 0 ? '#0177FF' : '#F62458'}>
          {data.rankChange}
        </S.RankChange>
      </S.NicknameWrapper>
      <S.Point>{data.point.toLocaleString()} PT</S.Point>
      <S.PlayCnt>{data.playCnt}회</S.PlayCnt>
      <S.AverageRank>{data.averageRank}위</S.AverageRank>
    </S.List>
  );
};

export default List;
