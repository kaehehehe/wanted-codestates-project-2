import styled, { keyframes } from 'styled-components';

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: whitesmoke;
  margin-bottom: 15px;
  padding: 10px 50px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Rank = styled.div`
  flex: 0.1;
`;

export const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
`;

export const Nickname = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;

const fadeUp = keyframes`
  from {
    opacity: 1;
  transform: translateY(0px);
  }

  to {
    opacity: 0;
  transform: translateY(-10px);
  }
`;

export const ArrowUp = styled.div`
  animation: ${fadeUp} 2s ease-in infinite;
`;

const fadeDown = keyframes`
  from {
    opacity: 1;
  transform: translateY(0);
  }

  to {
    opacity: 0;
  transform: translateY(10px);
  }
`;

export const ArrowDown = styled.div`
  animation: ${fadeDown} 2s ease-in infinite;
`;

export const RankChange = styled.div`
  font-size: 13px;
  margin-left: 5px;
  color: ${({ color }) => color};
`;

export const Point = styled.div`
  font-size: 14px;
`;
export const PlayCnt = styled(Point)``;

export const AverageRank = styled(Point)``;
