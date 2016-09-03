import PlaylistDetail from './playlist_detail.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/playlist_actions.js';

const mapStateToProps = state => ({
  playlistDetail: state.playlists.playlistDetail,
  currentUser: state.session.currentUser,
  createdPlaylists: state.playlists.createdPlaylists
});

const mapDispatchToProps = dispatch => ({
  deletePlaylist: playlistId => dispatch(ACTIONS.removePlaylist(playlistId)),
  updatePlaylist: playlist => dispatch(ACTIONS.receivePlaylistDetail(playlist))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);
