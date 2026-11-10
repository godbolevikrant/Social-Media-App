import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;