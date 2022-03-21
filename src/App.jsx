import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Ranking from './pages/Ranking/Ranking';
import Kart from './pages/Kart/Kart';
import Track from './pages/Track/Track';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/kart" element={<Kart />} />
        <Route path="/track" element={<Track />} />
      </Routes>
    </Router>
  );
};

export default App;
