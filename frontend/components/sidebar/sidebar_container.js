import { connect } from 'react-redux';
import Sidebar from './sidebar.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  createdPlaylists: state.playlists.createdPlaylists,
  openDemoModal: ownProps.openDemoModal,
  playlists: state.playlists
});


export default connect(mapStateToProps)(Sidebar);
