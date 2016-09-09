import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentUser} from '../../actions/session_actions.js';
import UserPlaylistIndex from './user_playlist_index.jsx';

const DEFAULT_IMAGE = 'assets/default_profile.png';


class UserDetail extends React.Component {
  constructor(props){
    super(props);
  }


  getBioContent(){
    return (
      <div className='bio-area'>
        <h5>User Bio</h5>
        <div className='user-desc'>{this.props.userDetail.description}</div>
      </div>
    );
  }

  getFollowLink(){
    if(this.props.userDetail.follows && this.props.userDetail.follows !== 'true'){
      return (
        <a className='playlist-control-btn follow-btn' onClick={this.toggleFollow.bind(this)}>Follow</a>
      );
    } else {
      return (
        <a className='playlist-control-btn delete-btn' onClick={this.toggleFollow.bind(this)}>Unfollow</a>
      );
    }
  }

  toggleFollow(){
    if(this.props.userDetail.follows === 'true'){
      this.props.unfollowUser(this.props.userDetail.id);
      this.props.toggleFollow('false');
    } else{
      this.props.followUser(this.props.userDetail.id);
      this.props.toggleFollow('true');
    }
  }


  render() {
    const image = this.props.userDetail.profile_image_url ? this.props.userDetail.profile_image_url : DEFAULT_IMAGE
    let playlists;
    if(this.props.userDetail.playlists && this.props.userDetail.playlists.length > 0){
      playlists =   (<div className='info-container'>
          <h5>Playlists</h5>
          <UserPlaylistIndex playlists={this.props.userDetail.playlists} />
        </div>)
    }

    return (
      <div className='detail-info-container .account-info'>
        <div className='left-area-profile' >
          <section className='profile-picture'>
            <img src={image}/>
          </section>
          {this.getFollowLink()}
        </div>
        <section className='main-info profile-info'>
          <div className='info-container'>
            <h4>{this.props.userDetail.username}</h4>
            {this.getBioContent()}
          </div>

          {playlists}
        </section>
      </div>
    );
  }
}

export default UserDetail;
