import React from 'react';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dwf6beu4e/image/upload/v1472753244/images/ikpgc0g6ecz8fdz1lrda.png';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const image = this.props.user.profile_image_url ? this.props.user.profile_image_url : DEFAULT_IMAGE;


    return(
      <header className='splash-header header'>
        <div className='logo'>
          <div className='logo-thumb'>
            <img src='https://res.cloudinary.com/dwf6beu4e/image/upload/v1473200830/images/m9lnkeha9yiaxxyj68z4.png' />
          </div>
          <h3>Speechify</h3>
        </div>
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
