import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container.js';
import HeaderContainer from '../header//header_container.js';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles.js';
import SessionFormContainer from '../session_form/session_form_container.js';
import {withRouter} from 'react-router'


document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authModel: false,
      formType: '',
      demo: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openDemoModal = this.openDemoModal.bind(this);
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
          openSignupModal={this.openModal.bind(this, 'signup')}/>

        <SidebarContainer openDemoModal={this.openDemoModal.bind(this)}/>
        {modal}
        <section className='content-area'>
          {this.props.children}
        </section>
      </main>
    );
  };
}

const authModalStyle2 = {
  overlay : {
   position        : 'fixed',
   top             : 0,
   left            : 0,
   right           : 0,
   bottom          : 0,
   backgroundColor : 'rgba(255, 255, 255, 0.75)',
   zIndex          : 10
 },
 content : {
   position        : 'fixed',
   top             : '80px',
   width           : '330px',
   height          : '370px',
   borderRadius    : '20px',
   padding         : 0,
   margin          : '0 auto',
   zIndex          : 11
 }
};


export default withRouter(App);
