import React from 'react';
import UserDetail from './user_detail.jsx';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/user_actions.js';

const mapStateToProps = state => ({
  userDetail: state.userDetail,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  followUser: userId => dispatch(ACTIONS.followUser(userId)),
  unfollowUser: userId => dispatch(ACTIONS.unfollowUser(userId)),
  toggleFollow: status => dispatch(ACTIONS.toggleUserDetailFollow(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
