import PlaylistDetail from './playlist_detail.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/playlist_actions.js';

const mapStateToProps = state => ({
  playlistDetail: state.playlists.playlistDetail,
  followedPlaylists: state.playlists.followedPlaylists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deletePlaylist: playlistId => dispatch(ACTIONS.removePlaylist(playlistId)),
  updatePlaylist: playlist => dispatch(ACTIONS.receivePlaylistDetail(playlist)),
  followPlaylist: playlistId => dispatch(ACTIONS.followPlaylist(playlistId)),
  unfollowPlaylist: playlistId => dispatch(ACTIONS.unfollowPlaylist(playlistId))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);
