import React from 'react';
import Modal from 'react-modal';
import {authModalStyle} from '../../util/modal_styles.js';
import SessionFormContainer from '../session_form/session_form_container.js';
import {withRouter} from 'react-router';


document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document.body);
});

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authModel: false,
      formType: ''
    };

    this.openDemoModal = this.openDemoModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(type){
    this.setState({authModel: true, formType: type, demo: false});
  }

  openDemoModal(){
    this.setState({authModel: true, formType: 'login', demo: true});
  }

  closeModal(){
    this.props.clearSessionErrors();
    this.setState({authModel: false, demo: false});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user && nextProps.user.id){
      this.props.router.push('/app');
    }
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
      </Modal>);
    }

    return (
      <header className='splash-header header'>
        <div className='logo'>
          <div className='logo-thumb'>
            <img src='http://res.cloudinary.com/dwf6beu4e/image/upload/v1473200830/images/m9lnkeha9yiaxxyj68z4.png' />
          </div>
          <h3>Speechify</h3>
        </div>
        <div className='button-bar'>
          {this.props.user && this.props.user.id ? "" :
          <ul className='header-links'>
            <li className='sign-in-link' onClick={this.openModal.bind(this, 'login')}>Sign In</li>
            <li className='splash-demo-btn splash-btn' onClick={this.openDemoModal.bind(this)}>Demo</li>
          </ul>}
        </div>
        {modal}
      </header>
    );
  }
}

export default withRouter(SplashHeader);
