import React from 'react';
import {reduceString} from '../../util/string_utils.js';
const DEFAULT_IMAGE = 'assets/default_image.png';

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
