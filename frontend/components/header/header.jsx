import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link} from 'react-router';


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
            <ul className='header-links'>
              <li className='account-link' onClick={this.props.exitSidebar}><Link to={'/account'}>Account</Link></li>
              <li className='sign-out-link' onClick={this.handleLogout}>Sign Out</li>
            </ul>
        </div>
      )
    } else {
      return (
        <div className='button-bar'>
          <ul className='header-links'>
            <li className='sign-in-link' onClick={this.props.openLoginModal}>Sign In</li>
            <li className='sign-up-link' onClick={this.props.openSignupModal}>Sign Up</li>
          </ul>
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
