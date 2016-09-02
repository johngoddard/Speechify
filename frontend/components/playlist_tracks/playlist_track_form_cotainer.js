import PlaylistTrackForm from './playlist_track_form.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  playlists: state.playlists.createdPlaylists
})

export default connect(mapStateToProps)(PlaylistTrackForm);
