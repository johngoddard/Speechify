import React from 'react';
import {reduceString} from '../../util/string_utils.js';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

const AudioDisplay = ({track}) => (
  <section className='audio-display' >
    <div className='play-track-thumb'>
      <img src={track.track_image_url ? track.track_image_url : DEFAULT_IMAGE} />
    </div>
    <div className='track-dis-info'>
      <span className='track-artist'>{track.artist}</span>
      <span className='curr-track-title'>{reduceString(track.title, 100)}</span>
    </div>
  </section>
);

export default AudioDisplay;
