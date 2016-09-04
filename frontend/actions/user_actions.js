export const UserConstants = {
  FETCH_ALL_USERS: "FETCH_ALL_USERS",
  RECEIVE_ALL_USERS: "RECEIVE_ALL_USERS",
  RECEIVE_FOLLOWED_USERS: "RECEIVE_FOLLOWED_USERS",
  FETCH_FOLLOWED_USERS: "FETCH_FOLLOWED_USERS",
  FETCH_USER_DETAIL: "FETCH_USER_DETAIL",
  RECEIVE_USER_DETAIL: "RECEIVE_USER_DETAIL",
  FOLLOW_USER: "FOLLOW_USER",
  UNFOLLOW_USER: "UNFOLLOW_USER",
  TOGGLE_USER_DETAIL_FOLLOW: "TOGGLE_USER_DETAIL_FOLLOW"
};

export const fetchAllUsers = () => ({
  type: UserConstants.FETCH_ALL_USERS
});

export const fetchFollowedUsers = () => ({
  type: UserConstants.FETCH_FOLLOWED_USERS
});

export const receiveAllUsers = users => ({
  type: UserConstants.RECEIVE_ALL_USERS,
  users
});

export const receiveFollowedUsers = users => ({
  type: UserConstants.RECEIVE_FOLLOWED_USERS,
  users
});

export const followUser = userId => ({
  type: UserConstants.FOLLOW_USER,
  userId
});

export const unfollowUser = userId => ({
  type: UserConstants.UNFOLLOW_USER,
  userId
});

export const fetchUserDetail = userId => ({
  type: UserConstants.FETCH_USER_DETAIL,
  userId
});

export const receiveUserDetail = user => ({
  type: UserConstants.RECEIVE_USER_DETAIL,
  user
});

export const toggleUserDetailFollow = status => ({
  type: UserConstants.TOGGLE_USER_DETAIL_FOLLOW,
  status
});
