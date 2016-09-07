import React from 'react';
import HeroVideo from './hero_video.jsx';
import SplashHeader from './splash_header.jsx';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles.js';
import SessionFormContainer from '../session_form/session_form_container.js';
import {withRouter} from 'react-router';

document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authModal: false,
      formType: ''
    };

    this.openDemoModal = this.openDemoModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser && nextProps.currentUser.id){
      this.props.router.push('/app');
    }
  }

  openModal(type, demo){
    this.setState({authModal: true, formType: type, demo: demo});
  }

  openDemoModal(){
    this.setState({authModal: true, formType: 'login', demo: true});
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
      <main>
        <SplashHeader openLoginModal={this.openModal.bind(this, 'login', false)}
                      openDemoModal={this.openModal.bind(this, 'login', true)}
                      user={this.props.currentUser}/>
        <HeroVideo />
        <section className='marketing-content'>
          <div className='marketing-header'>
            A world of oration at your fingertips
          </div>
          <div className='marketing-body'>
            <p>Explore classic and current speeches from politics, sports, movies and more.</p>
            <p>Create and share content with our rapidly-growing community.</p>
            <p>Connect with friends and rhetorical enthusiasts from around the world.</p>
          </div>
          <div className='create-btn' onClick={this.openModal.bind(this, 'signup', false)}>Create Account</div>

        </section>
        <footer>
          <div className='footer-copy'>
            &copy; 2016 Speechify. All rights reserved.
          </div>

          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Service</li>
          </ul>
        </footer>

        <Modal isOpen={this.state.authModal}
               onRequestClose={this.closeModal.bind(this)}
               style={authModalStyle}>

           <SessionFormContainer formType={this.state.formType}
              closeModal={this.closeModal.bind(this)}
              toggleForm={this.toggleForm.bind(this)}
              demo={this.state.demo}
            />
        </Modal>
      </main>
    );
  }
}

export default withRouter(Splash);
