import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  baseColor: '#FFFFFF',
  mainColor: '#212529',
  grayColor: '#ECECEC'
};

export const darkTheme = {
  baseColor: '#121212',
  mainColor: '#ECECEC',
  grayColor: '#252525'
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  body {
    background-color: ${({ theme }) => theme.baseColor};
  }
`;
