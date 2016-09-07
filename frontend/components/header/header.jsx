import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link} from 'react-router';
import SearchContainer from '../../components/search/search_container.js';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  handleLogout(){
    this.props.router.push('/app');
    this.props.logout();
  }

  goToAccount(){
    this.props.router.push('/app/account');
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
        <div className='welcome-area'>
          <div className='welcome-message'>Welcome, {this.props.currentUser.username}!</div>
            <ul className='header-links'>
              <li className='account-link' onClick={this.props.exitSidebar}><Link to={'/app/account'}>Account</Link></li>
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
        <div className='logo'>
          <div className='logo-thumb'>
            <img src='https://res.cloudinary.com/dwf6beu4e/image/upload/v1473200830/images/m9lnkeha9yiaxxyj68z4.png' />
          </div>
          <h3>Speechify</h3>
        </div>
        <SearchContainer />
        {rightContent}
      </header>
    );
  }
}

export default withRouter(Header);
