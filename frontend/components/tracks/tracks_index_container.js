import { connect } from 'react-redux';
import TracksIndex from './tracks_index.jsx';
import { clearTrackErrors } from '../../actions/form_actions.js';
import { fetchAllTracks } from '../../actions/track_actions.js';

const mapStateToProps = state => ({
  tracks: state.tracks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearTrackErrors: () => dispatch(clearTrackErrors()),
  fetchTracks: filter => dispatch(fetchAllTracks(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
