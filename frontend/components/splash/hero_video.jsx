import React from 'react';
import { Link } from 'react-router';

const HeroVideo = () => {

  return (
    <section className="video-container">
      <div className='overlay'></div>
        <div className='hero-message'>
          <h1>GET INSPIRED</h1>
          <h2>Discover and stream classic speeches and talks</h2>
          <Link to={'/app'}><div className='explore-btn splash-btn'>Start Exploring</div></Link>
        </div>
         <video autoPlay loop preload className="hero">
           <source src='https://res.cloudinary.com/dwf6beu4e/video/upload/v1473219374/videos/vol-edit-200_tohbmf.mp4' />
           Your browser does not support the <code>video</code> tag.
         </video>
     </section>
  );
};

export default HeroVideo;
