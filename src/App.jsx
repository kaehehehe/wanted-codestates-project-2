import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Ranking from './pages/Ranking/Ranking';
import Track from './pages/Track/Track';
import User from './pages/User/User';
import NotFound from './pages/NotFound';
import { lightTheme, darkTheme, GlobalStyle } from './GlobalStyle';
import { useLocalStorage } from './hooks/useLocalStorage';

export const GlobalContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [userSoloMatchData, setUserSoloMatchData] = useState([]);
  const [userTeamMatchData, setUserTeamMatchData] = useState([]);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <GlobalContext.Provider
          value={{
            userSoloMatchData,
            setUserSoloMatchData,
            userTeamMatchData,
            setUserTeamMatchData,
          }}
        >
          <Header theme={theme} setTheme={setTheme} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Ranking />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/track/solo" element={<NotFound />} />
            <Route path="/track/team" element={<NotFound />} />
            <Route path="/user/:nickname" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
