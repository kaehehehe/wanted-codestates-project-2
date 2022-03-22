import styled from 'styled-components';

export const ProgressBar = styled.div`
  position: relative;
`;

export const Value = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-size: 16px;
  color: ${({ color }) => color};
`;
