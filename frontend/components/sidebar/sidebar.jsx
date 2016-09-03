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
    this.getCreatedPlaylists = this.getCreatedPlaylists.bind(this);
    this.getFollowedPlaylists = this.getFollowedPlaylists.bind(this);
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
      case '#/':
        li = document.querySelector('#speeches');
        li.className='nav-item selected';
        break;
      case '#/your-speeches':
        li = document.querySelector('#your-speeches');
        li.className='nav-item selected';
        break;
      case '#/playlists':
        li = document.querySelector('#browse-playlists');
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
    if(!nextProps.inSidebar || !nextProps.currentUser){
      this.resetSelected();
    }
    this.initializeSelected();
  }


  getCreatedPlaylists(){
    const createdPlaylists = this.props.createdPlaylists;
    return Object.keys(createdPlaylists).map((id, idx) => (
      <Link to={`/playlist/${id}`} key={`${id}${idx}`}>
        <li className='nav-item'
            onClick={this.selectLink}
            id={`playlist-${id}`}>
          {createdPlaylists[id].title}
        </li>
      </Link>
    ));
  }

  getFollowedPlaylists(){
    const followedPlaylists = this.props.followedPlaylists;

    return followedPlaylists.map((playlist, idx) => (
      <Link to={`/playlist/${playlist.id}`} key={`${playlist.id}${idx}`}>
        <li className='nav-item'
            onClick={this.selectLink}
            id={`playlist-${playlist.id}`}>
          {playlist.title}
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
            <Link to={'/'}>
              <li className='nav-item' id='speeches' onClick={this.selectLink}>
                Speeches
              </li>
            </Link>
            <Link to={'/playlists'}>
              <li id='browse-playlists' className='nav-item' onClick={this.selectLink}>
                Playlists
              </li>
            </Link>
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
              <li className='nav-item' id='your-speeches' onClick={this.selectLink}>
                Your Speeches
              </li>
            </Link>
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>YOUR PLAYLISTS</span>
            {this.getCreatedPlaylists()}
          </ul>
        </li>
        <li className='sidebar-section'>
          <ul><span>FOLLOWED PLAYLISTS</span>
            {this.getFollowedPlaylists()}
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
              <Link to={'/'}>
                <li className='nav-item' id='speeches' onClick={this.selectLink}>
                  Speeches
                </li>
              </Link>
              <Link to={'/playlists'}>
                <li className='nav-item' id='browse-playlists' onClick={this.selectLink}>
                  Playlists
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
              <div className='sidebar-buttons'>
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
