import React from 'react';

class TrackSearchItem extends React.Component {

  play(){
    this.props.setTrack(this.props.track);
    this.props.playTrack();
    this.props.closeSearch();
  }

  render(){
    return(
      <li className='track-search-item search-item' onClick={this.play.bind(this)}>
        <span className='search-artist'>{this.props.track.artist}:</span> {this.props.track.title}
      </li>
    );
  }
}

export default TrackSearchItem;
