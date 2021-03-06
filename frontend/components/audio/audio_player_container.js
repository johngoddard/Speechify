import {connect} from 'react-redux';
import AudioPlayer from './audio_player.jsx';
import * as ACTIONS from '../../actions/audio_actions.js';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(ACTIONS.goBack()),
  goForward: () => dispatch(ACTIONS.goForward()),
  play: () => dispatch(ACTIONS.playTrack()),
  pause: () => dispatch(ACTIONS.pauseTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
