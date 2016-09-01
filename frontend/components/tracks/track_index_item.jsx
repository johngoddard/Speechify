import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const editContent = (
      <div className='track-idx-button'>
        <a className='edit-button' onClick={this.props.openEditModal}>Edit</a>
        <a className='delete-button' onClick={this.props.deleteTrack}>Delete</a>
      </div>
    );

    return(
      <div className='track-item-container info-container'>
        <div className='track-image'>
          <img src='http://thetoastrack.club/wp-content/uploads/2015/09/obama-speech-624x421.jpg'/>
        </div>
        <span className='track-artist'>{this.props.track.artist}</span>
        <span className='track-title'>{this.props.track.title}</span>
        {this.props.editable ? editContent : ''}
      </div>
    );
  }
}

export default TrackIndexItem;
