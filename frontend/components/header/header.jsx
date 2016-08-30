import React from 'react';
import Modal from 'react-modal';


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
        <div className='welcome-area'>
          <div className='welcome-message'>Welcome, {this.props.currentUser.username}!</div>
          <a className='sign-out-link' onClick={this.props.logout}>Sign Out</a>
        </div>
      )
    } else {
      return (
        <div className='button-bar'>
          <a className='sign-in-link' onClick={this.props.openLoginModal}>Sign In</a>
          <a className='sign-up-link' onClick={this.props.openSignupModal}>Sign Up</a>
        </div>
      )
    }
  }

  render(){
    const rightContent = this.getRightContent();
    return (
      <header className='header'>
        <h3>Speechify</h3>
        {rightContent}
      </header>
    );
  }
}

export default Header;
