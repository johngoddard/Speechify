export const fetchAllPlaylists = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/playlists",
    success,
    error
  });
};

export const fetchCurrentUserPlaylists = (user, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/playlists",
    data: {user_id: user.id, with_tracks: 'true'},
    success,
    error
  });
};

export const fetchUserPlaylists = (user, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/playlists",
    data: {user_id: user.id},
    success,
    error
  });
};

export const createPlaylist = (playlist, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/playlists",
    data: {playlist: playlist},
    success,
    error
  });
};
