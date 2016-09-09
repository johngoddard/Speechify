import React from 'react';
import {Link} from 'react-router';

export default ({exitSidebar, handleLogout}) => (
  <ul className='header-drop'>
    <Link to={'/app/account'}>
    <li className='account-link' onClick={exitSidebar}>
      <span className='glyphicon glyphicon-cog'></span>
      Account
    </li>
    </Link>
    <li className='sign-out-link' onClick={handleLogout}>
      <span className='glyphicon glyphicon-log-out'></span>
      Sign Out
    </li>
  </ul>
);
