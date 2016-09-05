import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

const AudioDisplay = ({track}) => (
  <section className='audio-display' >
    <div className='play-track-thumb'>
      <img src={track.track_image_url ? track.track_image_url : DEFAULT_IMAGE} />
    </div>
    <div className='track-dis-info'>
      <span className='track-artist'>{track.artist}</span>
      <span className='curr-track-title'>{track.title}</span>
    </div>
  </section>
);

export default AudioDisplay;
