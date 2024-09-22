import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation links for different users
  const navLinks = [
    { name: 'User 1', path: '/users/1' },
    { name: 'User 2', path: '/users/2' },
    { name: 'User 3', path: '/users/3' },
  ];

  return (
    <nav className='Navbar'>
      {/* Logo */}
      <div className='navbar-logo'>
        <Link to='/'>
          <h3>Dashboard</h3>
        </Link>
      </div>

      {/* Desktop Links */}
      {/* <div className='links'>
        <ul className='text-links'>
          {!isMobile && navLinks.map(link => (
            <li key={link.name} className='link'>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Small screen navigation */}
      {isMobile && (
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={toggleDrawer ? faTimes : faBars}
            className="menu-icon"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />
          <div className={`drawer ${toggleDrawer ? 'open' : 'close'}`}>
            <ul className="mobile-links">
              {navLinks.map(link => (
                <li key={link.name} className="mobile-link">
                  <Link to={link.path} onClick={() => setToggleDrawer(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
