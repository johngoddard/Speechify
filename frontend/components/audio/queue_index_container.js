import { connect } from 'react-redux';
import QueueIndex from './queue_index.jsx';
import * as ACTIONS from '../../actions/audio_actions.js';

const mapStateToProps = state => ({
  currentAudio: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  setCurrentTrack: track => dispatch(ACTIONS.setCurrentTrack(track)),
  setQueuePosition: track => dispatch(ACTIONS.setQueuePosition(track))
});

export default connect(mapStateToProps)(QueueIndex);
