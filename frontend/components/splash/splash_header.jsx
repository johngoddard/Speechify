import React from 'react';

const SplashHeader = ({user, openLoginModal, openDemoModal}) => (
  <header className='splash-header header'>
    <div className='logo'>
      <div className='logo-thumb'>
        <img src='http://res.cloudinary.com/dwf6beu4e/image/upload/v1473200830/images/m9lnkeha9yiaxxyj68z4.png' />
      </div>
      <h3>Speechify</h3>
    </div>
    <div className='button-bar'>
      {user && user.id ? "" :
      <ul className='header-links'>
        <li className='sign-in-link' onClick={openLoginModal}>Sign In</li>
        <li className='splash-demo-btn splash-btn' onClick={openDemoModal}>Demo</li>
      </ul>}
    </div>
  </header>
)

export default SplashHeader;
