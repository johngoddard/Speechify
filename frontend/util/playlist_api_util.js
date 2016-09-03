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

export const fetchPlaylistDetail = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `/api/playlists/${id}`,
    success,
    error
  });
};

export const updatePlaylist = (playlist, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/playlists/${playlist.id}`,
    data: {playlist: playlist},
    success,
    error
  });
};

export const addPlaylistTrack = (playlistId, trackId, success, error) => {
  $.ajax({
    method: "POST",
    url: `/api/playlists/${playlistId}/add_track`,
    data: {track_id: trackId},
    success,
    error
  });
};

export const deletePlaylistTrack = (playlistId, trackId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}/remove_track`,
    data: {track_id: trackId},
    success,
    error
  });
};

export const removePlaylist = (playlistId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}`,
    success,
    error
  });
};

export const fetchFollowedPlaylists = (userId, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/playlists",
    data: {followed: 'true'},
    success,
    error
  });
};

export const followPlaylist = (playlistId, success, error) => {
  $.ajax({
    method: "POST",
    url: `/api/playlists/${playlistId}/follow`,
    success,
    error
  });
};

export const unfollowPlaylist = (playlistId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/playlists/${playlistId}/unfollow`,
    success,
    error
  });
};
