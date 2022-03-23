import styled from 'styled-components';

export const MatchRecord = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.baseColor};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.mainColor};
  border-color: ${({ theme }) => theme.grayColor};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
`;

export const EndTime = styled.div`
  flex: 0.5;
  font-size: 14px;
  margin: auto 0;
`;

export const Rank = styled.div`
  flex: 0.5;
  font-size: 35px;
  margin: auto 0;

  span {
    font-size: 18px;
  }

  strong {
    font-size: 35px;
  }
`;

export const Track = styled.div`
  flex: 1;
  font-size: 18px;
  margin: auto 0;
`;

export const Kart = styled.div`
  flex: 1;
  font-size: 18px;
  margin: auto 0;
`;

export const MatchTime = styled.div`
  flex: 0.5;
  font-size: 18px;
  margin: auto 0;
`;
