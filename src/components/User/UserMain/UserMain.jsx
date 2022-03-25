import React, { useContext } from 'react';

import * as S from './style';
import MatchTypeBtn from '../../MatchTypeBtn';
import { GlobalContext } from '../../../App';

const UserMain = ({ matchType, setMatchType, nickname }) => {
  const { userSoloMatchData, userTeamMatchData } = useContext(GlobalContext);

  const getMatchWinCnt = (data) => {
    const result = data.filter((item) => item.player.matchWin === '1');
    return result.length;
  };

  const getFavoriteMode = (data) => {
    switch (matchType) {
      case '개인전':
        const speedIndiCombine = data.filter(
          (item) => item.channelName === 'speedIndiCombine'
        );
        const speedIndiInfinit = data.filter(
          (item) => item.channelName === 'speedIndiInfinit'
        );
        if (speedIndiCombine >= speedIndiInfinit) {
          return '통합';
        } else {
          return '무한부스터';
        }
      case '팀전':
        const speedTeamCombine = data.filter(
          (item) => item.channelName === 'speedTeamCombine'
        );
        const speedTeamInfinit = data.filter(
          (item) => item.channelName === 'speedTeamInfinit'
        );
        if (speedTeamCombine >= speedTeamInfinit) {
          return '통합';
        } else {
          return '무한부스터';
        }
      default:
    }
  };

  return (
    <>
      {matchType === '개인전' && (
        <S.UserMain>
          <S.CharacterWrapper>
            <S.Character
              src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${userSoloMatchData[0]?.character}.png`}
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
                <strong>{userSoloMatchData.length}</strong>전&nbsp;
              </span>
              <span>
                <strong>{getMatchWinCnt(userSoloMatchData)}</strong>승&nbsp;
              </span>
              <span>
                <strong>
                  {userSoloMatchData.length - getMatchWinCnt(userSoloMatchData)}
                </strong>
                패&nbsp;
              </span>
            </div>
            <span>
              최다주행 모드&nbsp;
              <strong className="mode">
                {getFavoriteMode(userSoloMatchData)}
              </strong>
            </span>
          </S.UserData>
        </S.UserMain>
      )}
      {matchType === '팀전' && (
        <S.UserMain>
          <S.CharacterWrapper>
            <S.Character
              src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${userTeamMatchData[0]?.character}.png`}
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
                <strong>{userTeamMatchData.length}</strong>전&nbsp;
              </span>
              <span>
                <strong>{getMatchWinCnt(userTeamMatchData)}</strong>승&nbsp;
              </span>
              <span>
                <strong>
                  {userTeamMatchData.length - getMatchWinCnt(userTeamMatchData)}
                </strong>
                패&nbsp;
              </span>
            </div>
            <span>
              최다주행 모드&nbsp;
              <strong className="mode">
                {getFavoriteMode(userTeamMatchData)}
              </strong>
            </span>
          </S.UserData>
        </S.UserMain>
      )}
    </>
  );
};

export default UserMain;
