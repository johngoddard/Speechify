import React from 'react';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getShortened = this.getShortened.bind(this);
    this.getAddButton = this.getAddButton.bind(this);
    this.getPlayingAnimation = this.getPlayingAnimation.bind(this);
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
        <a className='add-playlist-btn track-add-btn'
           onClick={this.props.openPlaylistModal}>
           Add to Playlist
        </a>
      );
    }
  }

  playTrack(){
    this.props.setTrack(this.props.track);
    this.props.startPlaying();
  }

  pauseTrack(){
    this.props.pause();
  }

  getPlayButton(){
    if(this.props.track.audio_url &&
    !(this.props.currentTrack.track && this.props.currentTrack.track.id === this.props.track.id && this.props.currentTrack.playing)){
      return (
        <div className='track-play-btn'>
          <span className="glyphicon glyphicon-play" onClick={this.playTrack.bind(this)}></span>
        </div>
      );
    }
  }

  getPlayingAnimation(){
    if(this.props.currentTrack.track && this.props.currentTrack.track.id === this.props.track.id && this.props.currentTrack.playing){
      return(
        <div className = 'playing-animation-container'>
          <div className="playing-spinner" onClick={this.pauseTrack.bind(this)}>
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      );
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
          {this.getPlayingAnimation()}
          <img src={imageSource}/>
          <div className='track-btns'>
            {this.getAddButton()}
            <a className='queue-btn track-add-btn'
               onClick={this.props.addToQueue.bind(null, this.props.track)}>
               Add to Queue
            </a>
          </div>
          {this.getPlayButton()}
        </div>
        <span className='track-artist'>{this.getShortened(this.props.track.artist)}</span>
        <span className='track-title'>{this.getShortened(this.props.track.title)}</span>
        {this.props.editable ? editContent : ''}
      </div>
    );
  }
}

export default TrackIndexItem;
