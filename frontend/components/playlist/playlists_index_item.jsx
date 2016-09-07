import React from 'react';
const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/video/upload/v1473219374/vol-edit-200_tohbmf.mp4';
import { Link } from 'react-router';

class PlaylistsIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  getFollowLink(){
    let view = this;
    let ids = this.props.followedPlaylists.map(p => p.id);

    if(this.props.currentUser && this.props.playlist.user_id !== this.props.currentUser.id){
      if(view.props.playlist && ids.includes(view.props.playlist.id)){
        return (
          <a className='playlist-follow-link'
             onClick={this.props.unfollowPlaylist.bind(this, this.props.playlist.id)}>
            Unfollow
          </a>
        );
      } else{
        return (
          <a className='playlist-follow-link'
             onClick={this.props.followPlaylist.bind(this, this.props.playlist.id)}>
            Follow
          </a>
        );
      }
    }
  }

  render(){
    return(
      <div className='info-container playlist-idx-container'>
        <div className='playlist-cover'>
          <img src={this.props.playlist.playlist_cover_url ? this.props.playlist.playlist_cover_url : DEFAULT_IMAGE } />
        </div>
        <div className='playlist-idx-info'>
          {this.getFollowLink()}
          <Link to={`/app/playlist/${this.props.playlist.id}`} >
            <h4 className='playlist-title'>
              {this.props.playlist.title}
            </h4>
          </Link>
          <p className='track-count'>{this.props.playlist.username} | {this.props.playlist.track_count} speeches</p>
          <p className='playlist-desc-idx'>{this.props.playlist.description}</p>
        </div>
      </div>
    );
  }
}

export default PlaylistsIndexItem;
