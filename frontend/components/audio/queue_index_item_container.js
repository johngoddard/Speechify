import { connect } from 'react-redux';
import QueueIndexItem from './queue_index_item.jsx';
import * as ACTIONS from '../../actions/audio_actions.js';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setCurrentTrack: track => dispatch(ACTIONS.setCurrentTrack(track)),
  setQueuePosition: pos => dispatch(ACTIONS.setQueuePosition(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(QueueIndexItem);
