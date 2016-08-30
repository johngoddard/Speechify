import React from 'react';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.getRightContent = this.getRightContent.bind(this);
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
      <ul className='nav-list'>
        <li className='sidebar-section'>
          <ul><span>DISCOVER</span>
            <li className='selected'>Speeches</li>
            <li>Playlists</li>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>CONNECT</span>
            <li>You Follow</li>
            <li>Find Friends</li>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>PLAYLISTS</span>
            <li>Playlist 1</li>
            <li>Playlist 2</li>
            <li>Playlist 3</li>
          </ul>
        </li>
      </ul>);
    } else {
      return (
        <ul className='nav-list'>
          <li className='sidebar-section'>
            <ul><span>DISCOVER</span>
              <li className='selected'>Speeches</li>
              <li>Playlists</li>
            </ul>
          </li>

          <div className='signed-out-marketing'>
            <div className='marketing-text-header'>
              NEW TO SPEECHIFY?
            </div>
            <div className='marketing-text-content'>
              Learn how you can create playlists, upload audio, connect with friends, and more!
              <div className='sidebar-buttons'>
                <a className='demo-button'
                   onClick={this.props.openDemoModal}>Demo</a>
              </div>
            </div>
          </div>
        </ul>);
    }
  }

  render(){
    const content = this.getRightContent();
    return (
      <section className='sidebar'>
        {content}
      </section>
    );
  }
}

export default Sidebar;
