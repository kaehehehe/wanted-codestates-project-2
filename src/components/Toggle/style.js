import styled from 'styled-components';

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 28px;
  cursor: pointer;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.grayColor};
  background-color: ${({ show }) => show && '#015ECC'};
  border-radius: 32px;

  &::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 300ms;
    border-radius: 50%;
    transform: ${({ show }) => show && 'translateX(27px)'};
  }

  &::after {
    content: '';
    position: absolute;
  }
`;
