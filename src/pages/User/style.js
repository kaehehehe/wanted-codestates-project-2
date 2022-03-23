import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
