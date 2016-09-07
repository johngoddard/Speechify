import { Link } from 'react-router';
import React from 'react';

const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472753244/images/ikpgc0g6ecz8fdz1lrda.png';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: ''
    };
  }

  toggleFollow(){
    if(this.state.followed){
      this.setState({followed: false});
      this.props.unfollowUser(this.props.user.id);
    } else{
      this.setState({followed: true});
      this.props.followUser(this.props.user.id);
    }
  }

  componentDidMount(){
    let location = window.location.hash;
    location = location.split('?')[0];
    const followed = (location === '#/app/followed-users');
    this.setState({followed: followed});
  }

  getFollowLink(){
    if(!this.state.followed){
      return (
        <a className='user-follow-link' onClick={this.toggleFollow.bind(this)}>Follow</a>
      );
    } else {
      return (
        <a className='user-follow-link' onClick={this.toggleFollow.bind(this)}>Unfollow</a>
      );
    }
  }



  render(){
    const image = this.props.user.profile_image_url ? this.props.user.profile_image_url : DEFAULT_IMAGE;

    return (
      <li className='user-li'>
        <div className='user-thumb'>
          <img src={image}/>
        </div>
        {this.getFollowLink()}
        <div className='user-idx-item'>
          <div className='user-idx-header'>
            <Link to={`/app/user/${this.props.user.id}`}>
              <span className='user-idx-name'>{this.props.user.username}</span>
            </Link>
            <div className='user-stats'>
              Tracks: {this.props.user.track_count} | Playlists: {this.props.user.playlist_count} | Followers: {this.props.user.followers}
            </div>
          </div>
          <div className='user-bio'>{this.props.user.description}</div>
        </div>
      </li>
    );
  }
}

export default UserIndexItem;
