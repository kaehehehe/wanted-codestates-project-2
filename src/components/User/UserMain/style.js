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

export const Buttons = styled.div`
  display: flex;
`;

export const SoloBtn = styled.button`
  width: 100px;
  padding: 5px 0;
  border: 1px solid #015ecc;
  border-radius: 5px 0 0 5px;
  background-color: ${({ matchType }) =>
    matchType === 'solo' ? '#015ecc' : '#FFFFFF'};
  color: ${({ matchType }) => (matchType === 'solo' ? '#FFFFFF' : '#015ecc')};
  cursor: pointer;
`;

export const TeamBtn = styled(SoloBtn)`
  border-radius: 0 5px 5px 0;
  background-color: ${({ matchType }) =>
    matchType === 'team' ? '#015ecc' : '#FFFFFF'};
  color: ${({ matchType }) => (matchType === 'team' ? '#FFFFFF' : '#015ecc')};
`;
