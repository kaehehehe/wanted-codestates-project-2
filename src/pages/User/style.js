import styled, { keyframes } from 'styled-components';

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

const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const MatchingSimulator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  height: 50px;
  color: whitesmoke;
  margin-top: 20px;
  padding: 0 20px;
  animation: ${gradient} 10s linear infinite;

  button {
    padding: 3px 10px;
    border-radius: 30px;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    background-color: transparent;
    cursor: not-allowed;
  }
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
