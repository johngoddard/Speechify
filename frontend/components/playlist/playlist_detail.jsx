import React from 'react';
import PlaylistTracksIndex from './playlist_tracks_index.jsx';
import PlaylistFormContainer from './playlist_form_container.js';
import { withRouter, browserHistory} from 'react-router';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.getPlaylistCover = this.getPlaylistCover.bind(this);
    this.trackRendering = this.trackRendering.bind(this);

    this.state = {
      edit: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({edit: false});
  }

  toggleEdit(){
    if(this.state.edit){
      this.setState({edit: false});
    } else {
      this.setState({edit: true});
    }
  }

  redirectToUser(){
    this.props.router.push(`/app/user/${this.props.playlistDetail.user_id}`);
  }

  getInfoContent(){
    if(this.state.edit){
      return (
        <div className='info-container'>
          <PlaylistFormContainer type='edit'
            playlist={this.props.playlistDetail}/>
        </div>
      );
    } else {
      return (
        <div className='info-container'>
          <h4>{this.props.playlistDetail.title}</h4>
          {(this.props.currentUser && this.props.currentUser.id === this.props.playlistDetail.user_id) ? '' :
            <h6 onClick={this.redirectToUser.bind(this)}>
              {this.props.playlistDetail.username}
            </h6>}
          <div className='playlist-desc'>
            <p>{this.props.playlistDetail.description}</p>
          </div>
        </div>
      );
    }
  }

  getCoverGrid(tracks){
    return(
      <div className='playlist-image-grid' >
        <img src={tracks[0].track_image_url} />
        <img src={tracks[1].track_image_url} />
        <img src={tracks[2].track_image_url} />
        <img src={tracks[3].track_image_url} />
      </div>
    );
  }

  getPlaylistCover(){
    let playlistDetail = this.props.playlistDetail;

    if(playlistDetail && playlistDetail.tracks && playlistDetail.tracks[0] && playlistDetail.tracks[0].track_image_url){
      let tracks = this.props.playlistDetail.tracks;
      let withImage = tracks.filter(track => track.track_image_url);

      if(withImage.length > 3){
        return this.getCoverGrid(withImage);
      } else if(withImage.length > 0){
        return (<img src={withImage[0].track_image_url}/>);
      } else{
        return (<img src={DEFAULT_IMAGE}/>);
      }

    } else {
      return (<img src={DEFAULT_IMAGE}/>);
    }
  }

  trackRendering(){
    if(this.props.playlistDetail.tracks){
      return (
        <div className='info-container playist-track-idx'>
          <PlaylistTracksIndex tracks={this.props.playlistDetail.tracks}
                               editable={(this.props.currentUser && this.props.playlistDetail.user_id === this.props.currentUser.id)}
                               playlist={this.props.playlistDetail}
          />
        </div>
      );
    }
  }

  getEditLink(){
    if(this.props.currentUser && this.props.playlistDetail.user_id === this.props.currentUser.id){
      return (
        <a onClick={this.toggleEdit}>
          {this.state.edit ? 'Cancel' : 'Edit info'}
        </a>
      );
    }
  }

  deletePlaylist(){
    this.props.deletePlaylist(this.props.playlistDetail.id);
    this.props.router.goBack();
  }

  followPlaylist(){
    this.props.followPlaylist(this.props.playlistDetail.id);
  }

  unfollowPlaylist(){
    this.props.unfollowPlaylist(this.props.playlistDetail.id);
  }



  getControlButton(){
    let playlistDetail = this.props.playlistDetail;
    if(this.props.currentUser && playlistDetail.user_id === this.props.currentUser.id){
      return(
        <a className='playlist-control-btn delete-btn' onClick={this.deletePlaylist.bind(this)}>
          Delete Playlist
        </a>
      );
    } else if(this.props.followedPlaylists.map(playlist => playlist.id).includes(playlistDetail.id)){
      return(
        <a className='playlist-control-btn delete-btn' onClick={this.unfollowPlaylist.bind(this)}>
          Unfollow Playlist
        </a>
      );
    } else if(this.props.currentUser && playlistDetail.user_id !== this.props.currentUser.id) {
      return (
        <a className='playlist-control-btn follow-btn' onClick={this.followPlaylist.bind(this)}>
          Follow Playlist
        </a>
      );
    }
  }

  getPlayButton(){
    if(this.props.playlistDetail.tracks && this.props.playlistDetail.tracks.length > 0){
      return (
        <div className='playlist-play-btn'>
          <span className="glyphicon glyphicon-play" onClick={this.playPlaylist.bind(this)}></span>
        </div>
      )
    }
  }

  playPlaylist(){
    this.props.playPlaylist(this.props.playlistDetail);
  }

  render(){
    return (
      <div className='detail-info-container'>
        <section className='left-info'>
          <div className='playlist-picture profile-picture'>
            {this.getPlayButton()}
            {this.getPlaylistCover()}
            {this.getControlButton()}
          </div>
        </section>
        <section className='main-info playlist-info'>
          {this.getEditLink ()}
          {this.getInfoContent()}
          {this.trackRendering()}
        </section>
      </div>
    );
  }
}

export default withRouter(PlaylistDetail);
