import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item.jsx';
import * as ACTIONS from '../../actions/track_actions.js';
import * as AUDIO_ACTIONS from '../../actions/audio_actions.js';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track,
  editable: ownProps.editable,
  playlists: state.playlists.createdPlaylists,
  currentUser: state.session.currentUser,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(ACTIONS.destroyTrack(ownProps.track)),
  startPlaying: () => dispatch(AUDIO_ACTIONS.playTrack()),
  pause: () => dispatch(AUDIO_ACTIONS.pauseTrack()),
  setTrack: track => dispatch(AUDIO_ACTIONS.setCurrentTrack(track)),
  addToQueue: track => dispatch(AUDIO_ACTIONS.addToQueue(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
