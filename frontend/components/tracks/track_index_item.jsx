import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.getShortened = this.getShortened.bind(this);
  }

  getShortened(text){
    if(!text){
      return null;
    }
    else if (text.length < 23){
      return text;
    } else{
      return `${text.slice(0,21)}...`;
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


    return(
      <div className='track-item-container info-container'>
        <div className='track-image'>
          <img src='http://thetoastrack.club/wp-content/uploads/2015/09/obama-speech-624x421.jpg'/>
        </div>
        <span className='track-artist'>{this.getShortened(this.props.track.artist)}</span>
        <span className='track-title'>{this.getShortened(this.props.track.title)}</span>
        {this.props.editable ? editContent : ''}
      </div>
    );
  }
}

export default TrackIndexItem;
