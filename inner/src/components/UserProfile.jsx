import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.scss'; 

const UserProfile = ({ userId, setUserProfileImage }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
        const profileImageUrl = `https://robohash.org/${response.data.id}?set=set5`;
        setUserProfileImage(profileImageUrl); 
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId, setUserProfileImage]);

  if (loading) return <div>Loading user data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="user-profile-card">
      {user && (
        <>
          <img src={`https://robohash.org/${user.id}?set=set5`} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
