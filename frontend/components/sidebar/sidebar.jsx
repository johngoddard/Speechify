import React from 'react';
import { Link, withRouter } from 'react-router';
import { playlistModalStyle } from '../../util/modal_styles.js';
import PlaylistFormContainer from '../../components/playlist/playlist_form_container.js';
import Modal from 'react-modal';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistModel: false
    };

    this.getRightContent = this.getRightContent.bind(this);
    this.selectLink = this.selectLink.bind(this);
    this.resetSelected = this.resetSelected.bind(this);
    this.initializeSelected = this.initializeSelected.bind(this);
    this.getPlaylists = this.getPlaylists.bind(this);
    this.openPlaylistModal = this.openPlaylistModal.bind(this);
  }

  componentDidMount(){
    this.initializeSelected();
  }

  initializeSelected(){
    let location = window.location.hash;
    let li;
    location = location.split('?')[0];
    switch (location) {
      case '#/app':
        li = document.querySelector('#speeches');
        li.className='nav-item selected';
        break;
      case '#/app/speeches':
        li = document.querySelector('#speeches');
        li.className='nav-item selected';
        break;
      case '#/app/your-speeches':
        li = document.querySelector('#your-speeches');
        li.className='nav-item selected';
        break;
      case '#/app/playlists':
        li = document.querySelector('#browse-playlists');
        li.className='nav-item selected';
        break;
      case '#/app/followed-users':
        li = document.querySelector('#followed-users');
        li.className='nav-item selected';
        break;
      case '#/app/users':
        li = document.querySelector('#find-friends');
        li.className='nav-item selected';
        break;
      default:
        break;
    }
  }

  openPlaylistModal(){
    this.props.clearPlaylistErrors();
    this.setState({playlistModal: true});
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
    this.closeModal();
    if(!nextProps.inSidebar || (!nextProps.currentUser && this.props.currentUser)){
      this.resetSelected();
    }
    this.initializeSelected();
  }

  getPlaylists(){
    const createdPlaylists = Object.keys(this.props.createdPlaylists).map(id => {
      return this.props.createdPlaylists[id];
    });
    const userPlaylists = this.props.followedPlaylists.concat(createdPlaylists);
    let sorted = userPlaylists.sort((p1, p2) => {
      return Date.parse(p2.user_playlist_date) - Date.parse(p1.user_playlist_date);
    });


    return sorted.map((playlist, idx) => (
      <Link to={`/app/playlist/${playlist.id}`} key={`${playlist.id}${idx}`}>
        <li className='nav-item'
            onClick={this.selectLink}
            id={`playlist-${playlist.id}`}>
          <div className='sidebar-item'><span className='glyphicon glyphicon-th-list'></span>{playlist.title}</div>
        </li>
      </Link>
    ));
  }

  getRightContent(){
    if(this.props.currentUser){
      return (
      <ul className='nav-list'>
        <li className='sidebar-section'>
          <ul><span>DISCOVER</span>
            <Link to={'/app/speeches'}>
              <li className='nav-item' id='speeches' onClick={this.selectLink}>
                <div className='sidebar-item'><span className='glyphicon glyphicon-th'></span>Speeches</div>
              </li>
            </Link>
            <Link to={'/app/playlists'}>
              <li id='browse-playlists' className='nav-item' onClick={this.selectLink}>
                <div className='sidebar-item'><span className='glyphicon glyphicon-align-justify'></span>Playlists</div>
              </li>
            </Link>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>CONNECT</span>
            <Link to={'/app/followed-users'}>
              <li className='nav-item' id='followed-users' onClick={this.selectLink}>
                <div className='sidebar-item'><span className='glyphicon glyphicon-heart'></span>You Follow</div>
              </li>
            </Link>
            <Link to={'/app/users'}>
              <li className='nav-item' id='find-friends' onClick={this.selectLink}>
                <div className='sidebar-item'><span className='glyphicon glyphicon-user'></span>Find Friends</div>
              </li>
            </Link>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>YOUR AUDIO</span>
            <Link to={'/app/your-speeches'}>
              <li className='nav-item' id='your-speeches' onClick={this.selectLink}>
                <div className='sidebar-item'><span className='glyphicon glyphicon-headphones'></span>Your Speeches</div>
              </li>
            </Link>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>PLAYLISTS</span>
            {this.getPlaylists()}
          </ul>
          <div className='sidebar-buttons'>
            <a className='nav-bar-btn' onClick={this.openPlaylistModal.bind(this)}>+ Add Playlist</a>
          </div>
        </li>
      </ul>);
    } else {
      return (
        <ul className='nav-list'>
          <li className='sidebar-section'>
            <ul><span>DISCOVER</span>
              <Link to={'/app/speeches'}>
                <li className='nav-item' id='speeches' onClick={this.selectLink}>
                  <div className='sidebar-item'><span className='glyphicon glyphicon-th'></span>Speeches</div>
                </li>
              </Link>
              <Link to={'/app/playlists'}>
                <li id='browse-playlists' className='nav-item' onClick={this.selectLink}>
                  <div className='sidebar-item'><span className='glyphicon glyphicon-align-justify'></span>Playlists</div>
                </li>
              </Link>
            </ul>
          </li>

          <div className='signed-out-marketing'>
            <div className='marketing-text-header'>
              NEW TO SPEECHIFY?
            </div>
            <div className='marketing-text-content'>
              Learn how you can create playlists, upload audio, connect with friends, and more!
              <div className='sidebar-buttons signed-out'>
                <a className='nav-bar-btn'
                   onClick={this.props.openDemoModal}>Demo Account</a>
              </div>
            </div>
          </div>
        </ul>);
    }
  }

  closeModal(){
    this.setState({playlistModal: false});
    this.props.clearPlaylistErrors();
  }

  render(){
    const content = this.getRightContent();
    let modal;
    if(this.state.playlistModal){
      modal = (<Modal
         isOpen={true}
         onRequestClose={this.closeModal.bind(this)}
         style={playlistModalStyle}>
         <PlaylistFormContainer type='new' />
       </Modal>)
    }

    return (
      <section className='sidebar'>
        {modal}
        {content}
      </section>
    );
  }
}

export default withRouter(Sidebar);
