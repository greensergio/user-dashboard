import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import UserActivities from './components/UserActivities';
import axios from 'axios';


const UserPage = () => {
  const { userId } = useParams(); 
  const [profileImageUrl, setProfileImageUrl] = useState(''); 

  return (
    <div className="user-page">

      <UserProfile userId={userId} setUserProfileImage={setProfileImageUrl} />

      <UserActivities userId={userId} profileImageUrl={profileImageUrl} />
    </div>
  );
};

function App() {
  const [friends, setFriends] = useState([]); 


  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setFriends(response.data.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <Router>
      <div className="App">
    
        <Navbar friends={friends} />
        <Routes>
  
          <Route path="/" element={<HomePage />} />

   
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
