import PlaylistForm from './playlist_form.jsx';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/playlist_actions.js';


const mapStateToProps = state => ({
  createdPlaylists: state.createdPlaylists,
  errors: state.forms.playlist.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.type === 'edit') ? ACTIONS.updatePlaylist : ACTIONS.createPlaylist

  return {
    processForm: playlist => dispatch(processForm(playlist))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
