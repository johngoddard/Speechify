import React from 'react';

class PlaylistTrackForm extends React.Component {
  constructor(props){
    super(props);
    this.getPlaylistItem = this.getPlaylistItem.bind(this);
  }

  add(playlistId, trackId){
    this.props.addToPlaylist(playlistId, trackId);
  }

  remove(playlistId, trackId){
    this.props.removeFromPlaylist(playlistId, trackId);
  }

  getPlaylistItem(playlist){
    let button;

    if(playlist.tracks.map(track => track.id).includes(this.props.track.id)){
      button = (
                 <a className='track-btn remove'
                   onClick={this.remove.bind(this, playlist.id, this.props.track.id)}>
                   Remove
                 </a>
               );
    } else {
      button = (
                 <a className='track-btn add'
                   onClick={this.add.bind(this, playlist.id, this.props.track.id)}>
                   Add
                 </a>
               );
    }

    return(
      <li className='playlist-list-item' key={`${playlist.title}${playlist.id}`}>
        {playlist.title}
        {button}
      </li>
    );
  }

  render(){
    let playlists = this.props.playlists;
    const container = this;

    return (
      <div className='modal-form'>
        <div className='form-title'>Add Track to Playlists</div>
        <div className='playlist-track-form'>
          <ul>
            {Object.keys(playlists).map(id => container.getPlaylistItem(playlists[id]))}
          </ul>
          <a className='form-button' onClick={this.props.closeModal.bind(this)}>Done</a>
        </div>
      </div>
    );
  }
}

export default PlaylistTrackForm;
