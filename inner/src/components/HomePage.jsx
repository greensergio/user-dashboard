import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.scss';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [posts, setPosts] = useState([]); 
  const [allUsers, setAllUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      try {

        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = usersResponse.data.slice(0, 6); 
        setAllUsers(users); 
        setFriends(users.slice(0, 3)); 
        setSuggestedUsers(users.slice(3, 6)); 


        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const userPosts = postsResponse.data.filter(post => post.userId <= 6); 
        
 
        const shuffledPosts = shuffleArray(userPosts);
        setPosts(shuffledPosts); 
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchUsersAndPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="homepage">
      {/* Left sidebar: Friends List */}
      <div className="left-sidebar">
        <h3>Friends</h3>
        <ul>
          {friends.length > 0 ? (
            friends.map(friend => (
              <li key={friend.id}>
                <Link to={`/users/${friend.id}`}>
                  <img 
                    src={`https://robohash.org/${friend.id}?set=set5`} 
                    alt="Profile" 
                    className="profile-image-sidebar"
                  />
                  {friend.name}
                </Link>
              </li>
            ))
          ) : (
            <li>No friends found</li>
          )}
        </ul>
      </div>

      {/* Middle content: Welcome and For You section */}
      <div className="main-content">
        <div className='heading'>
        <h2>Welcome to Your Dashboard</h2>
        <p>Click on a friend to view their profile and activities.</p>
        </div>
        <h3>Suggested For You</h3>
        <div className="for-you-section">
          {posts.length > 0 ? (
            posts.map(post => {
              // Find the user who created the post by matching userId
              const user = allUsers.find(u => u.id === post.userId); // Ensure we use only 6 users
              return (
                <div key={post.id} className="media-card">
                  {/* Profile Picture and Name */}
                  <div className="media-header">
                    {user && (
                      <>
                        <Link to={`/users/${user.id}`}>
                          <img
                            src={`https://robohash.org/${user.id}?set=set5`}
                            alt="Profile"
                            className="profile-image"
                          />
                        </Link>
                        <div className="user-info">
                          <Link to={`/users/${user.id}`}>
                            <h4>{user.name}</h4>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Media Content */}
                  <div className="media-content">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p> 
                  </div>
                </div>
              );
            })
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>

      {/* Right sidebar: Suggested Users */}
      <div className="right-sidebar">
        <h3>Suggested Users</h3>
        <ul>
          {suggestedUsers.length > 0 ? (
            suggestedUsers.map(user => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                  <img 
                    src={`https://robohash.org/${user.id}?set=set5`} 
                    alt="Profile" 
                    className="profile-image-sidebar"
                  />
                  {user.name}
                </Link>
              </li>
            ))
          ) : (
            <li>No suggested users found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
