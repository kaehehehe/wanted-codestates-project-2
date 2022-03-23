import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const UserMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-color: ${({ theme }) => theme.grayColor};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px 0;
`;

export const MatchRecordList = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: -35px;
  right: 15px;

  p {
    font-size: 16px;
    margin-right: 15px;
    color: ${({ theme }) => theme.mainColor};
  }
`;
