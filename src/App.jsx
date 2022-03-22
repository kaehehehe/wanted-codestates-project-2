import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Ranking from './pages/Ranking/Ranking';
import Track from './pages/Track/Track';
import User from './pages/User/User';
import { lightTheme, darkTheme, GlobalStyle } from './GlobalStyle';
import { useLocalStorage } from './hooks/useLocalStorage';

export const GlobalContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [userData, setUserData] = useState([]);
  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <GlobalContext.Provider value={{ userData, setUserData }}>
          <Header theme={theme} setTheme={setTheme} />
          <Navbar />
          <Routes>
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/track/solo" element={<Track />} />
            <Route path="/track/team" element={<Track />} />
            <Route path="/user/:nickname" element={<User />} />
          </Routes>
        </GlobalContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
