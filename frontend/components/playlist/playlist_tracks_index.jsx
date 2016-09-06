import React from 'react';
import PlaylistTracksIndexItemContainer from './playlist_track_index_item_container.js';

const PlaylistTracksIndex = ({tracks, editable, playlist}) => (
  <section className='playlist-tracks-index'>
    <h5 id='tracks-header'>Track Listing</h5>
    {tracks.map((track, idx) => (
      <PlaylistTracksIndexItemContainer
                               track={track}
                               key={`${track.title}${track.id}`}
                               order={idx}
                               editable={editable}
                               playlist={playlist}/>
      )
    )}
  </section>
);

export default PlaylistTracksIndex;
