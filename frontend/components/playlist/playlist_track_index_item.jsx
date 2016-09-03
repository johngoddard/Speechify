import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class PlaylistTracksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTrack = this.removeTrack.bind(this);
  }

  removeTrack(){
    console.log(this.props);
    console.log(this);
    this.props.removeFromPlaylist(this.props.playlistId, this.props.track.id);
  }


  render(){
    const trackImage = this.props.track.track_image_url ? this.props.track.track_image_url : DEFAULT_IMAGE
    return (
      <div className='play-track-idx-item'>
        <div className='track-img-thumb'>
          <img src={trackImage} />
        </div>
        <div className='track-info'>{`${this.props.order + 1}.  ${this.props.track.title}`}</div>
        {this.props.editable ? (<div className='idx-rm-link' onClick={this.removeTrack.bind(this)}>Remove track</div>) : ''}
      </div>
    );
  }
}

export default PlaylistTracksIndexItem;
