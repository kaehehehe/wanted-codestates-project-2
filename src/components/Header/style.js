import styled from 'styled-components';

export const Header = styled.header`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 12px;
  color: #6c7a89;
  text-decoration: none;
  margin-right: 50px;
  cursor: pointer;
`;

export const ThemeToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.grayColor};
  }
`;
