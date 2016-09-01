import React from 'react';
import { Link, withRouter } from 'react-router';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.getRightContent = this.getRightContent.bind(this);
    this.selectLink = this.selectLink.bind(this);
    this.resetSelected = this.resetSelected.bind(this);
    this.initializeSelected = this.initializeSelected.bind(this);
  }

  componentDidMount(){
    this.initializeSelected();
  }

  initializeSelected(){
    let location = window.location.hash;
    let li;
    location = location.split('?')[0];
    switch (location) {
      case '#/':
        li = document.querySelector('.default');
        li.className='nav-item selected';
        break;
      case '#/your-speeches':
        li = document.querySelector('.your-speeches');
        li.className='nav-item selected';
        break;
      default:
        break;

    }
  }

  selectLink(e){
    this.resetSelected();
    this.props.enterSidebar();
    e.currentTarget.className='nav-item selected';

  }

  resetSelected(){
    let li = document.querySelector('.selected');
    if(li){
      li.classList.remove('selected');
    }
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.inSidebar){
      this.resetSelected();
    }
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
      <ul className='nav-list'>
        <li className='sidebar-section'>
          <ul><span>DISCOVER</span>
            <Link to={'/'}>
              <li className='nav-item default' onClick={this.selectLink}>
                Speeches
              </li>
            </Link>
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
          <ul><span>YOUR AUDIO</span>
            <Link to={'/your-speeches'}>
              <li className='nav-item your-speeches' onClick={this.selectLink}>
                Speechces
              </li>
            </Link>
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
              <li className='default'>Speeches</li>
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
                   onClick={this.props.openDemoModal}>Demo Account</a>
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

export default withRouter(Sidebar);
