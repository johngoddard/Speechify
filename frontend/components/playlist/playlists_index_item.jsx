import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472753244/images/ikpgc0g6ecz8fdz1lrda.png';
import { Link } from 'react-router';

class PlaylistsIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='info-container playlist-idx-container'>
        <div className='playlist-cover'>
          <img src={this.props.playlist.playlist_cover_url ? this.props.playlist.playlist_cover_url : DEFAULT_IMAGE } />
        </div>
        <div className='playlist-idx-info'>
          <Link to={`/playlist/${this.props.playlist.id}`} >
            <h4 className='playlist-title'>
              {this.props.playlist.title}
            </h4>
          </Link>
          <p className='track-count'>{this.props.playlist.track_count} speeches</p>
          <p>{this.props.playlist.description}</p>
        </div>
      </div>
    );
  }
}

export default PlaylistsIndexItem;
