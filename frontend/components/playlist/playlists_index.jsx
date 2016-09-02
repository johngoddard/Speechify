import React from 'react';
import PlaylistIndexItemContainer from './playlists_index_item_container.js';

class PlaylistsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className='playlist-index-page index-page'>
        <h3>Browse Playlists</h3>
        <ul>
          {this.props.playlists.map((playlist, idx) =>
            (<PlaylistIndexItemContainer playlist={playlist}
                                         key={`${playlist.title}${idx}`}/>)
          )}
        </ul>
      </section>
    );
  }
}

export default PlaylistsIndex;
