import React from 'react';
import PlaylistTracksIndexItemContainer from './playlist_track_index_item';

const PlaylistTracksIndex = ({tracks}) => (
  <section className='playlist-tracks-index'>
    <h5 id='tracks-header'>Track Listing</h5>
    {tracks.map((track, idx) => (
      <PlaylistTracksIndexItemContainer
                               track={track}
                               key={`${track.title}${track.id}`}
                               order={idx} />
      )
    )}
  </section>
)

export default PlaylistTracksIndex;
