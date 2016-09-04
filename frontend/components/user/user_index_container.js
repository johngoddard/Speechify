import { connect } from 'react-redux';
import UserIndex from './user_index.jsx';

const mapStateToProps = state => ({
  users: state.users.allUsers,
  followedUsers: state.users.followedUsers,
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(UserIndex);
