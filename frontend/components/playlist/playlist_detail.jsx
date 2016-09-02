import React from 'react';
import PlaylistTracksIndex from './playlist_tracks_index.jsx'

const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472750331/images/vgv7zdei4rllspn9ngio.jpg';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.getPlaylistImage = this.getPlaylistImage.bind(this);
    this.trackRendering = this.trackRendering.bind(this);
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
          <PlaylistTracksIndex tracks={this.props.playlistDetail.tracks} />
        </div>
      );
    }
  }

  render(){
    return (
      <div className='detail-info-container'>
        <section className='playlist-picture profile-picture'>
          <img src={this.getPlaylistImage()} />
        </section>
        <section className='main-info playlist-info'>
          <div className='info-container'>
            <h4>{this.props.playlistDetail.title}</h4>
            <div className='playlist-desc'>
              <p>{this.props.playlistDetail.description}</p>
            </div>
          </div>
          {this.trackRendering()}
        </section>
      </div>
    );
  }
}

export default PlaylistDetail;
