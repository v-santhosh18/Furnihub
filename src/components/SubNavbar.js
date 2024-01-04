import React from 'react';
import './SubNavbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function SubNavbar() {
  const { user } = useAuth();

  return (
    <div className='navbar-containers'>
      <div className='navbar-containers-name'>
        {user ? (
          <div>Welcome {user.name} !</div>
        ) : (
          <div>Welcome User!</div>
        )}
      </div>

      <div className='list-itemss'>
        <ul className='unordered-lists'>
          <Link to=''>
            <li>
              Living
            </li>
          </Link>
          <Link to=''>
            <li>Sofas</li>
          </Link>
          <Link to=''>
            <li>Bedroom</li>
          </Link>
          <Link to=''>
            <li>Kitchen</li>
          </Link>
          <Link to=''>
            <li>Dining</li>
          </Link>
          <Link to=''>
            <li>Outdoor</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
