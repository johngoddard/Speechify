export const fetchAllUsers = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/users",
    success,
    error
  });
};

export const fetchFollowedUsers = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/users",
    data: {curr_user: 'true'},
    success,
    error
  });
};

export const fetchUserDetail = (userId, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
    success,
    error
  });
};

export const followUser = (userId, success, error) => {
  $.ajax({
    method: "POST",
    url: `/api/users/${userId}/follow`,
    success,
    error
  });
};

export const unfollowUser = (userId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/unfollow`,
    success,
    error
  });
};
