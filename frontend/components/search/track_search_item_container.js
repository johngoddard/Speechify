import TrackSearchItem from './track_search_item.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/audio_actions.js';

const mapDispatchToProps = (dispatch, ownProps) => ({
  setTrack: track => dispatch(ACTIONS.setCurrentTrack(track)),
  playTrack: () => dispatch(ACTIONS.playTrack())
});

export default connect(null, mapDispatchToProps)(TrackSearchItem);
