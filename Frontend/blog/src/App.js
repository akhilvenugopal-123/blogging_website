import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import TechList from './components/Tech';
import TravelList from './components/Travel';
import FoodList from './components/Food';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/tech" element={<TechList />} />
          <Route path="/travel" element={<TravelList />} />
          <Route path="/food" element={<FoodList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
