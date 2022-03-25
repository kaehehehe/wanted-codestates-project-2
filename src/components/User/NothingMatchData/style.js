import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grayColor};
  height: 50vh;
  width: 100%;

  img {
    margin-bottom: 10px;
  }

  span {
    color: ${({ theme }) => theme.mainColor};
  }
`;
