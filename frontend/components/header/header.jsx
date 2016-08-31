import React from 'react';
import Modal from 'react-modal';
import { withRouter} from 'react-router';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  handleLogout(){
    this.props.router.push('/');
    this.props.logout();
  }

  goToAccount(){
    this.props.router.push('/account');
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
        <div className='welcome-area'>
          <div className='welcome-message'>Welcome, {this.props.currentUser.username}!</div>
          <a className='account-link' onClick={this.goToAccount}>Account</a>
          <a className='sign-out-link' onClick={this.handleLogout}>Sign Out</a>
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

export default withRouter(Header);
