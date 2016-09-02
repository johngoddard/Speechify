import PlaylistForm from './playlist_form.jsx';
import {connect} from 'react-redux';
import * as PLAYLIST_ACTIONS from '../../actions/playlist_actions.js';


const mapStateToProps = state => ({
  createdPlaylists: state.createdPlaylists,
  errors: state.forms.playlist.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: playlist => dispatch(PLAYLIST_ACTIONS.createPlaylist(playlist))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
