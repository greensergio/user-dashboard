import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserActivities.scss'; // Include your styling

const UserActivities = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch user activities');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  if (loading) {
    return <div>Loading activities...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-activities">
      <h2>User Activities</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="activity-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
