import React from 'react';
const DEFAULT_IMAGE = 'assets/default_image.png';
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
    if(e.target.className !== "idx-rm-link"){
      this.props.playPlaylistFrom(this.props.playlist, this.props.order);
    }
  }


  render(){
    const trackImage = this.props.track.track_image_url ? this.props.track.track_image_url : DEFAULT_IMAGE;
    return (
      <div className='play-track-idx-item' onClick={this.play.bind(this)}>
        <div className='track-img-thumb'>
          <img src={trackImage} />
          <div className='small-play-btn'>
            <span className="glyphicon glyphicon-play"></span>
          </div>
        </div>
        <div className='track-info'>
          <span className='artist'>
            {`${this.props.order + 1}. ${this.props.track.artist}`}:
          </span>
          {this.props.track.title}
        </div>
        {this.props.editable ? (<div className='idx-rm-link' onClick={this.removeTrack.bind(this)}>Remove track</div>) : ''}
      </div>
    );
  }
}

export default PlaylistTracksIndexItem;
