import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container.js';
import HeaderContainer from '../header//header_container.js';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles.js';
import SessionFormContainer from '../session_form/session_form_container.js';
import AudioPlayerContainer from '../audio/audio_player_container.js';
import LoadingModule from '../loading/loading_module.jsx';
import {withRouter} from 'react-router';


document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      authModal: false,
      formType: '',
      inSidebar: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.exitSidebar = this.exitSidebar.bind(this);
    this.enterSidebar = this.enterSidebar.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.fetchCurrentUserPlaylists(this.props.currentUser);
      this.props.fetchFollowedPlaylists(this.props.currentUser.id);
    }
  }

  exitSidebar() {
    this.setState({inSidebar: false});
  }

  enterSidebar() {
    this.setState({inSidebar: true});
  }

  openModal(type, demo){
    this.setState({authModal: true, formType: type, demo: demo});
  }

  closeModal(){
    this.props.clearSessionErrors();
    this.setState({authModal: false, demo: false});
  }

  toggleForm(){
    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

  render(){
    return (
      <main className='App group'>
        <HeaderContainer
          openLoginModal={this.openModal.bind(this, 'login', false)}
          openSignupModal={this.openModal.bind(this, 'signup', false)}
          exitSidebar={this.exitSidebar.bind(this)}
        />

      <SidebarContainer openDemoModal={this.openModal.bind(this, 'login', true)}
                          inSidebar={this.state.inSidebar}
                          enterSidebar={this.enterSidebar.bind(this)}
          />
      {this.props.loading ? <LoadingModule /> : ''}
      <Modal
         isOpen={this.state.authModal}
         onRequestClose={this.closeModal.bind(this)}
         style={authModalStyle}>

         <SessionFormContainer
            formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
            demo={this.state.demo}
          />
       </Modal>
        <section className='content-area'>
          {this.props.children}
        </section>
        <AudioPlayerContainer />
      </main>
    );
  };
}

export default withRouter(App);
