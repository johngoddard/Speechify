import { connect } from 'react-redux';
import UserIndexItem from './user_index_item.jsx';
import * as ACTIONS from '../../actions/user_actions.js';


const mapDispatchToProps = dispatch => ({
  followUser: userId => dispatch(ACTIONS.followUser(userId)),
  unfollowUser: userId => dispatch(ACTIONS.unfollowUser(userId))
});

export default connect(null, mapDispatchToProps)(UserIndexItem);
