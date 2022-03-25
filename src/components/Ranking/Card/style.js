import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../../assets/images/background_flag_rank.png';

const fadeUp = keyframes`
  from {
    opacity: 0;
  transform: translateY(20px);
  }

  to {
    opacity: 1;
  transform: translateY(0);
  }
`;

export const Card = styled.li`
  position: relative;
  background-color: whitesmoke;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 40px 20px 5px 20px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  animation: ${fadeUp} 1s ease-in forwards;
  opacity: 0;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MedalIcon = styled.img`
  position: absolute;
  top: -10px;
  left: 5px;
`;

export const Nickname = styled.h4`
  font-size: 18px;
  color: #0177ff;
  margin-bottom: 8px;
`;

export const Point = styled.div`
  font-size: 15px;
  margin-bottom: 8px;
`;

export const CircularProgressbarWrapper = styled.div`
  display: flex;
`;

export const CircularProgressbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 14px;
  }
`;
