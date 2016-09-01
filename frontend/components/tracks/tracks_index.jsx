import React from 'react';
import TrackIndexItemContainer from './track_index_item_container.js';
import Modal from 'react-modal';
import {trackModalStyle} from '../../util/modal_styles.js';
import TrackFormContainer from './track_form_container.js';

document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class TracksIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trackModal: false,
      formType: '',
      toEdit: null
    }

    this.openNewModal = this.openNewModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
  }

  componentWillReceiveProps(){
    this.closeModal();
  }



  openNewModal(){
    this.setState({trackModal: true, formType: 'new'});
  }

  openEditModal(track){
    this.setState({trackModal: true, formType: 'edit', toEdit: track});
  }

  closeModal(){
    this.setState({trackModal: false, formType: '', toEdit: null});
    this.props.clearTrackErrors();
  }

  render(){
    let location = window.location.hash.split('?')[0];
    let userTracks = (location === '#/your-speeches') ? true : false;
    let pageTitle = (location === '#/your-speeches') ? "Your Speeches" : "Browse Speeches"
    let modal;

    if(this.state.trackModal){
      modal = (<Modal isOpen={true}
                      onRequestClose={this.closeModal.bind(this)}
                      style={trackModalStyle}>
                <TrackFormContainer type={this.state.formType}
                                    track={this.state.toEdit}
                                    closeModal={this.closeModal.bind(this)}
                />
              </Modal>)
    }


    const tracks = this.props.tracks;
    const trackItems = Object.keys(tracks).map((id, idx) => (
      <TrackIndexItemContainer key={`${tracks[id]}${idx}`}
                               track={tracks[id]}
                               className='track-index-item'
                               editable={userTracks}
                               openEditModal={this.openEditModal.bind(this, tracks[id])}
      />
    )
    );

    return (
      <section className='tracks-index-page'>
        {modal}
        <h3>{pageTitle}</h3>
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