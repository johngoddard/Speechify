import React from 'react';
import HeroVideo from './hero_video.jsx';
import SplashHeaderContainer from './splash_header_container.js';

const Splash = () => (
  <main>
    <SplashHeaderContainer />
    <HeroVideo />
    <section className='marketing-content'>
      <div className='marketing-header'>
        A world of oration at your fingertips
      </div>
      <div className='marketing-body'>
        <p>Explore classic and current speeches from politics, sports, movies and more.</p>
        <p>Create and share content with our rapidly-growing community.</p>
        <p>Connect with friends and rhetorical enthusiasts from around the world.</p>
      </div>
      <div className='create-btn'>Create Account</div>

    </section>
    <footer>
      <div className='footer-copy'>
        &copy; 2016 Speechify. All rights reserved.
      </div>

      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  </main>
);

export default Splash;
