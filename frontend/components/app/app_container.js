import {connect} from 'react-redux';
import App from './app.jsx';
import { clearSessionErrors } from "../../actions/form_actions.js";
import * as PLAYLIST_ACTIONS from '../../actions/playlist_actions.js'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchCurrentUserPlaylists: user => dispatch(PLAYLIST_ACTIONS.fetchCurrentUserPlaylists(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
