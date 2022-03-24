import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
