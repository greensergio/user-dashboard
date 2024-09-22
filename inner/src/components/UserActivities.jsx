import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserActivities.scss'; 

const UserActivities = ({ userId, profileImageUrl }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(postsResponse.data);
      } catch (err) {
        setError('Error fetching media');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [userId]);

  if (loading) return <div>Loading media...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="user-activities">
      <h3>Media Shared by the User</h3>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="media-card">
            {/* Profile Picture and Name Section */}
            <div className="media-header">
              <img src={profileImageUrl} alt="Profile" className="profile-image" />
              <div className="user-info">
                <h4>{post.title}</h4> 
              </div>
            </div>

            {/* Media Content */}
            <div className="media-content">
              <p>{post.body}</p> 
            </div>
          </div>
        ))
      ) : (
        <p>No media available</p>
      )}
    </div>
  );
};

export default UserActivities;
