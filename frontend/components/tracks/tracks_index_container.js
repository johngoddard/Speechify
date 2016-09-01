import { connect } from 'react-redux';
import TracksIndex from './tracks_index.jsx';
import { clearTrackErrors } from '../../actions/form_actions.js'

const mapStateToProps = state => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  clearTrackErrors: () => dispatch(clearTrackErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
