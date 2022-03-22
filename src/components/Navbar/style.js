import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: #015ecc;
`;

export const Navbar = styled.div`
  height: 55px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  background-color: #015ecc;
`;

export const Nav = styled.nav`
  display: flex;

  a {
    font-size: 14px;
    color: #8cafe6;
    height: 100%;
    padding: 15px 30px;
    border-bottom: 3px solid transparent;
  }

  a:hover {
    color: white;
    border-bottom: 3px solid white;
  }
`;

export const NavMenuContainer = styled.div`
  background-color: #7cabe1;
  visibility: ${({ isHover }) => (isHover ? 'visible' : 'hidden')};
`;

export const NavMenu = styled.div`
  max-width: 1200px;
  padding: 8px 0 8px 120px;
  margin: 0 auto;
  background-color: #7cabe1;
  visibility: ${({ isHover }) => (isHover ? 'visible' : 'hidden')};

  a {
    color: white;
    margin-right: 40px;
    font-size: 12px;
  }

  a:hover {
    opacity: 0.7;
  }
`;
