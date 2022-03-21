import styled from 'styled-components';

export const Container = styled.div`
  background-color: #015ecc;
`;

export const Navbar = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;

  a {
    font-size: 14px;
    color: #8cafe6;
    height: 100%;
    padding: 15px 30px;
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }

  a:hover {
    color: white;
    border-bottom: 3px solid white;
  }
`;
