import React from 'react';
import PlaylistTracksIndex from './playlist_tracks_index.jsx';
import PlaylistFormContainer from './playlist_form_container.js';
import { withRouter, browserHistory} from 'react-router';

const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.getPlaylistImage = this.getPlaylistImage.bind(this);
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
          {this.props.currentUser.id === this.props.playlistDetail.user_id ? '' :
          <h6>{this.props.playlistDetail.username}</h6>}
          <div className='playlist-desc'>
            <p>{this.props.playlistDetail.description}</p>
          </div>
        </div>
      );
    }
  }

  getPlaylistImage(){
    let playlistDetail = this.props.playlistDetail;

    if(playlistDetail && playlistDetail.tracks && playlistDetail.tracks[0] && playlistDetail.tracks[0].track_image_url){
      return playlistDetail.tracks[0].track_image_url;
    } else {
      return DEFAULT_IMAGE;
    }
  }

  trackRendering(){
    if(this.props.playlistDetail.tracks){
      return (
        <div className='info-container'>
          <PlaylistTracksIndex tracks={this.props.playlistDetail.tracks}
                               editable={this.props.playlistDetail.user_id === this.props.currentUser.id} />
        </div>
      );
    }
  }

  getEditLink(){
    if(this.props.playlistDetail.user_id === this.props.currentUser.id){
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



  getControlButton(){
    if(this.props.playlistDetail.user_id === this.props.currentUser.id){
      return(
        <a className='playlist-control-btn delete-btn' onClick={this.deletePlaylist.bind(this)}>
          Delete Playlist
        </a>
      )
    }
  }

  render(){
    return (
      <div className='detail-info-container'>
        <section className='left-info'>
          <div className='playlist-picture profile-picture'>
            <img src={this.getPlaylistImage()} />
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
