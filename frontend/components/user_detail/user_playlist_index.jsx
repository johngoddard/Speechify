import React from 'react';
const DEFAULT_IMAGE = 'assets/default_image.png';
import { Link } from 'react-router';

const UserPlaylistIndex = ({playlists}) => {
  const playlistItems = playlists.map((playlist, idx) => {
  let image = DEFAULT_IMAGE;

  if(playlist.tracks[0] && playlist.tracks[0].track_image_url){
    image = playlist.tracks[0].track_image_url;
  }

  return (
    <Link to={`/app/playlist/${playlist.id}`} key={`${idx}${playlist.title}`}>
      <li className='user-play-li'>
        <div className='playlist-thumb-user'>
          <img src={image} />
        </div>
        <div className='user-play-info'>
          <span className='user-play-title'>{playlist.title}</span>
          <span className='user-track-count'>{playlist.tracks.length} tracks</span>
        </div>
      </li>
    </Link>
    );
  });

  return (
    <ul className='user-playlists'>
      {playlistItems}
    </ul>
  );

};

export default UserPlaylistIndex;
