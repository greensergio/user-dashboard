import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='home-page'>
    <div className="home-page-inner">
      <h2>Welcome to the User Dashboard</h2>
      <p>Here, you can explore user profiles and their activities, including posts and recent updates. Use the navigation menu to get started!</p>
      
      <div className="cta-section">
        <button onClick={() => navigate('/users/1')}>View User 1</button>
        <button onClick={() => navigate('/users/2')}>View User 2</button>
        <button onClick={() => navigate('/users/3')}>View User 3</button>
      </div>

      <div className="highlights-section">
        <h3>Featured Users</h3>
        <ul>
          <li><Link to="/users/1">User 1 - Recent Activity: Posted 3 new articles</Link></li>
          <li><Link to="/users/2">User 2 - Recent Activity: Commented on 5 posts</Link></li>
          <li><Link to="/users/3">User 3 - Recent Activity: Liked 7 posts</Link></li>
        </ul>
      </div>

      <div className="dashboard-overview">
        <h3>Dashboard Overview</h3>
        <p>Total Users: 10</p>
        <p>Total Posts: 35</p>
        <p>Recent Comments: 15</p>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
