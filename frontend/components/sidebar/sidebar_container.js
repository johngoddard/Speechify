import { connect } from 'react-redux';
import Sidebar from './sidebar.jsx';
import { logout } from '../../actions/session_actions.js';
import * as FORM_ACTIONS from '../../actions/form_actions.js'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  createdPlaylists: state.playlists.createdPlaylists,
  openDemoModal: ownProps.openDemoModal,
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  clearPlaylistErrors: () => dispatch(FORM_ACTIONS.clearPlaylistErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
