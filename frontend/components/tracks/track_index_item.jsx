import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getShortened = this.getShortened.bind(this);
    this.getAddButton = this.getAddButton.bind(this);
  }

  getShortened(text){
    if(!text){
      return null;
    }
    else if (text.length < 24){
      return text;
    } else{
      return `${text.slice(0,22)}...`;
    }
  }

  getAddButton(){
    if(this.props.currentUser && Object.keys(this.props.playlists).length > 0){
      return(
        <a className='add-playlist-btn upload-btn'
           onClick={this.props.openPlaylistModal}>
           Add to Playlist
        </a>
      )
    }
  }

  render(){
    const editContent = (
      <div className='track-idx-button'>
        <a className='edit-button' onClick={this.props.openEditModal}>Edit</a>
        <a className='delete-button' onClick={this.props.deleteTrack}>Delete</a>
      </div>
    );

    let title;
    const imageSource = this.props.track.track_image_url ? this.props.track.track_image_url : DEFAULT_IMAGE;

    return(
      <div className='track-item-container info-container'>
        <div className='track-image'>
          <img src={imageSource}/>
          {this.getAddButton()}
        </div>
        <span className='track-artist'>{this.getShortened(this.props.track.artist)}</span>
        <span className='track-title'>{this.getShortened(this.props.track.title)}</span>
        {this.props.editable ? editContent : ''}
      </div>
    );
  }
}

export default TrackIndexItem;
