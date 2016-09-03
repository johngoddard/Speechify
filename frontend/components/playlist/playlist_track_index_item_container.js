import PlaylistTracksIndexItem from './playlist_track_index_item.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/playlist_actions.js';

const mapStateToProps = state => ({
  playlistId: state.playlists.playlistDetail.id
});

const mapDispatchToProps = dispatch => ({
  removeFromPlaylist: (playlistId, trackId) => dispatch(ACTIONS.deletePlaylistTrack(playlistId, trackId)),
  updatePlaylist: (trackId) => dispatch(ACTIONS.removeDetailTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistTracksIndexItem);
