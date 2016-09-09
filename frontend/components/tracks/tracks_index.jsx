import React from 'react';
import TrackIndexItemContainer from './track_index_item_container.js';
import Modal from 'react-modal';
import {trackModalStyle} from '../../util/modal_styles.js';
import TrackFormContainer from './track_form_container.js';
import PlaylistTrackFormContainer from '../playlist_tracks/playlist_track_form_cotainer.js';
import TrackIndexHeader from './track_index_header.jsx';
import {addTrackModalStyle} from '../../util/modal_styles.js';

document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class TracksIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trackModal: false,
      playlistModal: false,
      formType: '',
      toEdit: null
    };

    this.openNewModal = this.openNewModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
  }

  componentWillReceiveProps(){
    this.closeModal();
  }

  openNewModal(){
    this.setState({trackModal: true, formType: 'new'});
  }

  openPlaylistModal(track){
    this.setState({trackModal: false, playlistModal: true, toEdit: track});
  }

  openEditModal(track){
    this.setState({trackModal: true, formType: 'edit', toEdit: track});
  }

  closeModal(){
    this.setState({trackModal: false, playlistModal: false, formType: '', toEdit: null});
    this.props.clearTrackErrors();
  }

  getModal(){
    if(this.state.trackModal){
      return (
        <Modal isOpen={true}
               onRequestClose={this.closeModal.bind(this)}
               style={trackModalStyle}>
          <TrackFormContainer type={this.state.formType}
                              track={this.state.toEdit}
                              closeModal={this.closeModal.bind(this)}
          />
        </Modal>);
    } else if (this.state.playlistModal){
      return (
        <Modal isOpen={true}
               onRequestClose={this.closeModal.bind(this)}
               style={addTrackModalStyle}>
          <PlaylistTrackFormContainer type={this.state.formType}
                                      track={this.state.toEdit}
                                      closeModal={this.closeModal.bind(this)}
          />
        </Modal>
      );
    }
  }

  filterTracks(category){
    if(!category){
      this.props.fetchTracks();
    } else if(category === 'recent'){
      this.props.fetchTracks({limit: 10});
    } else{
      this.props.fetchTracks({category: category});
    }
  }

  getHeader(){
    let location = window.location.hash.split('?')[0];
    if(location === '#/app/your-speeches'){
      return (<h3>Your Speeches</h3>);
    } else {
      return (
        <header>
          <TrackIndexHeader filterTracks={this.filterTracks.bind(this)}/>
          <h3 className='track-idx-title'>Browse Recently Added Speeches</h3>
        </header>
      );
    }
  }

  render(){
    let location = window.location.hash.split('?')[0];
    let userTracks = (location === '#/app/your-speeches') ? true : false;

    let tracks = Object.keys(this.props.tracks).map(id => this.props.tracks[id]);
    let sorted = tracks.sort((t1, t2) => Date.parse(t2.created_at) - Date.parse(t1.created_at));

    let trackItems = sorted.map((track, idx) => (
      <TrackIndexItemContainer
        key={`${track.id}${idx}`}
        track={track}
        className='track-index-item'
        editable={location === '#/app/your-speeches' &&
                  this.props.currentUser &&
                  this.props.currentUser.id === track.user_id}
        openEditModal={this.openEditModal.bind(this, track)}
        openPlaylistModal={this.openPlaylistModal.bind(this, track)}
      />
    )
  );

    return (
      <section className='tracks-index-page index-page'>
        {this.getModal()}
        {this.getHeader()}
        {userTracks ? (<a className='add-track-button' onClick={this.openNewModal}>+ Add Speech</a>) : ''}
        <div className='tracks-index-cont'>
          {trackItems}
          <div className='track-item-container'></div>
          <div className='track-item-container'></div>
          <div className='track-item-container'></div>
          <div className='track-item-container'></div>
          <div className='track-item-container'></div>
        </div>
      </section>
    );
  }
}

export default TracksIndex;
