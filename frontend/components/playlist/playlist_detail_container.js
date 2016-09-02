import PlaylistDetail from './playlist_detail.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  playlistDetail: state.playlists.playlistDetail
});

export default connect(mapStateToProps)(PlaylistDetail);
