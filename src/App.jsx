import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Ranking from './pages/Ranking/Ranking';
import Track from './pages/Track/Track';
import { lightTheme, darkTheme, GlobalStyle } from './GlobalStyle';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Navbar />
        <Routes>
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/track/solo" element={<Track />} />
          <Route path="/track/team" element={<Track />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
