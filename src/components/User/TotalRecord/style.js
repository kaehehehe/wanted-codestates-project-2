import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.mainColor};
`;

export const Title = styled.h3`
  margin-right: 20px;
  font-size: 18px;
`;
export const Record = styled.p`
  font-size: 14px;
`;

export const CircularProgressBarWrapper = styled.div`
  display: flex;
`;

export const CircularProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarName = styled.h4`
  color: ${({ theme }) => theme.mainColor};
`;
