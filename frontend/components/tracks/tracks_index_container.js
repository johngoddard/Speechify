import { connect } from 'react-redux';
import TracksIndex from './tracks_index.jsx';

const mapStateToProps = state => ({
  tracks: state.tracks
});

export default connect(mapStateToProps)(TracksIndex);
