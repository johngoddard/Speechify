import {connect} from 'react-redux';
import AudioPlayer from './audio_player.jsx';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

export default connect(mapStateToProps)(AudioPlayer);
