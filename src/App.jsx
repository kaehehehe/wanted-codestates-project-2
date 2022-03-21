import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Ranking from './pages/Ranking/Ranking';
import Kart from './pages/Kart/Kart';
import Track from './pages/Track/Track';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/kart" element={<Kart />} />
        <Route path="/track" element={<Track />} />
      </Routes>
    </Router>
  );
};

export default App;
