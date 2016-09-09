import React from 'react';
import PlaylistIndexItemContainer from './playlists_index_item_container.js';

class PlaylistsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let sortedPlaylists = this.props.playlists.sort((p1, p2) => Date.parse(p2.created_at) - Date.parse(p1.created_at));

    return (
      <section className='playlist-index-page index-page'>
        <h3>Browse Playlists</h3>
        <ul>
          {sortedPlaylists.map((playlist, idx) =>
            (<PlaylistIndexItemContainer playlist={playlist}
                                         key={`${playlist.title}${idx}`}/>)
          )}
        </ul>
      </section>
    );
  }
}

export default PlaylistsIndex;
