import {Link} from 'react-router';
import React from 'react';

const DEFAULT_IMAGE = 'assets/default_profile.png';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const image = (this.props.user && this.props.user.profile_image_url) ? this.props.user.profile_image_url : DEFAULT_IMAGE;

    return(
      <header className='splash-header header'>
        <Link to={'/app'}>
          <div className='logo'>
            <div className='logo-thumb'>
              <img src='assets/mic_blue.png' />
            </div>
            <h3>Speechify</h3>
          </div>
        </Link>
        <div className='button-bar'>
          {this.props.user && this.props.user.id ?
            <div className='splash-welcome'>
              {this.props.user.username}

              <div className='header-thumb'>
                <img src={image} />
              </div>
            </div> :
          <ul className='header-links'>
            <li className='sign-in-link' onClick={this.props.openLoginModal}>Sign In</li>
            <li className='splash-demo-btn splash-btn' onClick={this.props.openDemoModal}>Demo</li>
          </ul>}
        </div>
      </header>
    )
  }
}

export default SplashHeader;
