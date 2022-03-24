import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% {
  transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

export const Background = styled.div`
  width: 100vw;
  background-color: #015ecc;
  position: relative;

  .waves {
    margin-top: 150px;
  }

  .parallax > use {
    animation: ${wave} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -5s;
    animation-duration: 8s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -8s;
    animation-duration: 5s;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const ButtonWrapper = styled.div`
width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const MatchTypeBtn = styled.div`
  margin-right: 20px;
`;

export const CardWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ListWrapper = styled.ul`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
