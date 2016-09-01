import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container.js';
import HeaderContainer from '../header//header_container.js';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles.js';
import SessionFormContainer from '../session_form/session_form_container.js';
import {withRouter} from 'react-router';


document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authModel: false,
      formType: '',
      inSidebar: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openDemoModal = this.openDemoModal.bind(this);
    this.exitSidebar = this.exitSidebar.bind(this);
    this.enterSidebar = this.enterSidebar.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.fetchCurrentUserPlaylists(this.props.currentUser);
    }
  }

  exitSidebar() {
    this.setState({inSidebar: false});
  }

  enterSidebar() {
    this.setState({inSidebar: true});
  }

  openModal(type){
    this.setState({authModel: true, formType: type, demo: false});
  }

  openDemoModal(){
    this.setState({authModel: true, formType: 'login', demo: true});
  }

  closeModal(){
    this.props.clearSessionErrors()
    this.setState({authModel: false, demo: false});
  }

  toggleForm(){
    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

  render(){
    let modal;
    if(this.state.authModel){
      modal = (<Modal
         isOpen={true}
         onRequestClose={this.closeModal.bind(this)}
         style={authModalStyle}>

         <SessionFormContainer
            formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
            demo={this.state.demo}
          />
       </Modal>)
    }

    return (
      <main className='App group'>
        <HeaderContainer
          openLoginModal={this.openModal.bind(this, 'login')}
          openSignupModal={this.openModal.bind(this, 'signup')}
          exitSidebar={this.exitSidebar.bind(this)}
        />

        <SidebarContainer openDemoModal={this.openDemoModal.bind(this)}
                          inSidebar={this.state.inSidebar}
                          enterSidebar={this.enterSidebar.bind(this)}
          />
        {modal}
        <section className='content-area'>
          {this.props.children}
        </section>
      </main>
    );
  };
}

export default withRouter(App);
