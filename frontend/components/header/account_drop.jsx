import React from 'react';
import {Link} from 'react-router';

export default ({exitSidebar, handleLogout}) => (
  <ul className='header-drop'>
    <li className='account-link' onClick={exitSidebar}>
      <Link to={'/app/account'}>
        <span className='glyphicon glyphicon-cog'></span>
        Account
      </Link>
    </li>
    <li className='sign-out-link' onClick={handleLogout}>
      <span className='glyphicon glyphicon-log-out'></span>
      Sign Out
    </li>
  </ul>
);
