import styled, { keyframes } from 'styled-components';

export const UserMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Character = styled.img`
  animation: ${fadeIn} 1s linear;
  width: auto;
  height: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nickname = styled.h1`
  font-size: 40px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.mainColor};
`;

export const UserData = styled.div`
display: flex;
flex-direction: column;
  color: ${({ theme }) => theme.mainColor};

  div {
    display: flex;
  }
  strong {
    font-size: 30px;
  }
  span {
    font-size: 20px;
  }

  .mode {
    color: #0177FF;
  }
`;
