import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import UserActivities from './components/UserActivities';

import './App.scss'
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/users/:userId" 
            element={(
              <div>
                <UserProfile userId={1} />
                <UserActivities userId={1} />
              </div>
            )} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
