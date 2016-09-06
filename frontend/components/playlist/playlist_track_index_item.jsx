import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';
import { reduceString } from '../../util/string_utils.js';


class PlaylistTracksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTrack = this.removeTrack.bind(this);
    this.play = this.play.bind(this);
  }

  removeTrack(){
    this.props.removeFromPlaylist(this.props.playlistId, this.props.track.id);
    this.props.updatePlaylist(this.props.track.id);
  }

  play(e){
    console.log(e.target);
    this.props.playPlaylistFrom(this.props.playlist, this.props.order);
  }


  render(){
    const trackImage = this.props.track.track_image_url ? this.props.track.track_image_url : DEFAULT_IMAGE;
    return (
      <div className='play-track-idx-item' onClick={this.play.bind(this)}>
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
