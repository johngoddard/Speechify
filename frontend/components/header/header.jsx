import React from 'react';
import Modal from 'react-modal';
import { withRouter, Link} from 'react-router';
import SearchContainer from '../../components/search/search_container.js';
import HeaderDrop from './account_drop.jsx';

const DEFAULT_IMAGE = 'assets/default_profile.png';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accountDrop: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  componentDidMount(){
    $(document).mouseup(e => {
      let container = $('.welcome-area');

      if (!container.is(e.target)
         && container.has(e.target).length === 0) {
        this.closeDrop();
      }
    });
  }

  componentWillUnmount(){
    $(document).off('mouseup');
  }

  handleLogout(){
    this.props.router.push('/app');
    this.props.logout();
  }

  goToAccount(){
    this.props.router.push('/app/account');
  }

  openDrop(){
    this.setState({accountDrop: true});
    let thumb = document.querySelector(".header-thumb");
    if(thumb){
      thumb.className = 'header-thumb thumb-select';
    }
  }

  closeDrop(){
    this.setState({accountDrop: false});
    let thumb = document.querySelector(".header-thumb");
    if(thumb){
      thumb.className = 'header-thumb';
    }
  }

  closeAndExit(){
    this.closeDrop();
    this.props.exitSidebar();
  }

  getRightContent(){
    if(this.props.currentUser){
      let user = this.props.currentUser;
      const image = user.profile_image_url ? user.profile_image_url : DEFAULT_IMAGE;

      return (
        <div className='welcome-area'>
          <div className='welcome-message' onClick={this.openDrop.bind(this)}>
            {this.props.currentUser.username}

            <div className='header-thumb'>
              <img src={image} />
            </div>

          </div>
          {this.state.accountDrop ?
          <HeaderDrop exitSidebar={this.closeAndExit.bind(this)} handleLogout={this.handleLogout.bind(this)}/> : ''}
        </div>
      );
    } else {
      return (
        <div className='button-bar'>
          <ul className='header-links'>
            <li className='sign-in-link' onClick={this.props.openLoginModal}>Sign In</li>
            <li className='sign-up-link' onClick={this.props.openSignupModal}>Sign Up</li>
          </ul>
        </div>
      );
    }
  }

  render(){
    const rightContent = this.getRightContent();

    return (
      <header className='header'>
        <div className='logo'>
          <div className='logo-thumb'>
            <img src='http://res.cloudinary.com/dwf6beu4e/image/upload/v1473200830/images/m9lnkeha9yiaxxyj68z4.png' />
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
