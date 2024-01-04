import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link to='/'>
          <h3>FurniHub</h3>
        </Link>
      </div>

      <div className='list-items'>
        <ul className='unordered-list'>
          <Link to='/about'>
            <li>ABOUT US</li>
          </Link>
          <Link to='/contact'>
            <li>CONTACT US</li>
          </Link>
          {user ? (
            <div>
              <li>MY ACCOUNT</li>
              <li onClick={logout}>LOGOUT</li>
            </div>
          ) : (
            <div>
              <Link to='/signup'>
                <li>SIGN UP</li>
              </Link>
              <Link to='/login'>
                <li>LOGIN</li>
              </Link>
            </div>
          )}
          <div>
            <li>
              <i className='fa-solid fa-cart-shopping'></i>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

