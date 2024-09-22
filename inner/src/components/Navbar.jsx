import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ friends = [] }) => {  
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='Navbar'>
      {/* Logo */}
      <div className='navbar-logo'>
        <Link to='/'>
          <h3>Dashboard</h3>
        </Link>
      </div>

      {/* Small screen navigation */}
      {isMobile && (
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={toggleDrawer ? faTimes : faBars}
            className="menu-icon"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
          <div className={`drawer ${toggleDrawer ? 'open' : 'close'}`}>
            {toggleDrawer && (
              <>
                {/* Friends title */}
                <h4 className="mobile-friends-title">Friends</h4>

                {/* List of friends */}
                <ul className="mobile-links">
                  {friends.length > 0 ? (
                    friends.map(friend => (
                      <li key={friend.id} className="mobile-link">
                        <Link to={`/users/${friend.id}`} onClick={() => setToggleDrawer(false)}>
                          {friend.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>No friends found</li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
