import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item.jsx';
import * as ACTIONS from '../../actions/track_actions.js';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track,
  editable: ownProps.editable
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(ACTIONS.destroyTrack(ownProps.track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
