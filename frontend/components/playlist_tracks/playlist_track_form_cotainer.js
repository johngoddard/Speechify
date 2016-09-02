import PlaylistTrackForm from './playlist_track_form.jsx';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/playlist_actions.js';

const mapStateToProps = state => ({
  playlists: state.playlists.createdPlaylists
});

const mapDispatchToProps = dispatch => ({
  removeFromPlaylist: (playlistId, trackId) => dispatch(ACTIONS.deletePlaylistTrack(playlistId, trackId)),
  addToPlaylist: (playlistId, trackId) => dispatch(ACTIONS.addPlaylistTrack(playlistId, trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistTrackForm);
