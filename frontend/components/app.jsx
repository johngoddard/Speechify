import React from 'react';
import Sidebar from './sidebar/sidebar.jsx';
import HeaderContainer from './header//header_container.js';
import Modal from 'react-modal';
import {authModalStyle} from '../util/modal_styles.js';
import SessionFormContainer from './session_form/session_form_container.js';

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

  openModal(){
    this.setState({authModel: true, formType: 'signup', demo: false});
  }

  openDemoModal(){
    this.setState({authModel: true, formType: 'login', demo: true});
  }

  closeModal(){
    this.setState({authModel: false});
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
          openModal={this.openModal.bind(this)}
          openDemoModal={this.openDemoModal.bind(this)}/>

        <Sidebar />
        {modal}
        <section className='content-area'>
          {this.props.children}
        </section>
      </main>
    );
  };
}

export default App;
