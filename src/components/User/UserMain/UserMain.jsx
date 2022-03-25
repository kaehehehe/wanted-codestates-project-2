import React from 'react';

import * as S from './style';
import MatchTypeBtn from '../../MatchTypeBtn';

const UserMain = ({
  matchType,
  setMatchType,
  nickname,
  imgId,
  matchTotalCnt,
  matchWinCnt,
  favoriteMode
}) => {
  return (
    <S.UserMain>
      <S.CharacterWrapper>
      <S.Character
        src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${imgId}.png`}
        alt="character"
      />
      </S.CharacterWrapper>
      <S.Wrapper>
        <S.Nickname>{nickname}</S.Nickname>
        <MatchTypeBtn
          matchType={matchType}
          setMatchType={setMatchType}
          text_1="개인전"
          text_2="팀전"
        />
      </S.Wrapper>
      <S.UserData>
        <div>
          <span>
            <strong>{matchTotalCnt}</strong>전&nbsp;
          </span>
          <span>
            <strong>{matchWinCnt}</strong>승&nbsp;
          </span>
          <span>
            <strong>{matchTotalCnt - matchWinCnt}</strong>패&nbsp;
          </span>
        </div>
        <span>
          최다주행 모드&nbsp;
          <strong className="mode">{favoriteMode}</strong>
        </span>
      </S.UserData>
    </S.UserMain>
  );
};

export default UserMain;
