import styled, { keyframes } from 'styled-components';

export const UserMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex: 0.1;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
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
  align-items: center;
  flex-direction: column;
  flex: 0.3;
  /* background-color: yellow; */
`;

export const Nickname = styled.h1`
  font-size: 40px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.mainColor};
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.mainColor};
  flex: 0.3;
  /* background-color: green; */

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
    color: #0177ff;
  }
`;
