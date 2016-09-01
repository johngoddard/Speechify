export const PlaylistConstants = {
  FETCH_ALL_PLAYLISTS: "FETCH_ALL_PLAYLISTS",
  FETCH_USER_PLAYLISTS: "FETCH_USER_PLAYLISTS",
  CREATE_PLAYLIST: "CREATE_PLAYLIST",
  UPDATE_PLAYLIST: "UPDATE_PLAYLIST",
  DESTROY_PLAYLIST: "DESTROY_PLAYLIST",
  RECEIVE_ALL_PLAYLISTS: "RECEIVE_ALL_PLAYLISTS",
  RECEIVE_USER_PLAYLISTS: "RECEIVE_USER_PLAYLISTS",
  RECEIVE_SINGLE_PLAYLIST: "RECEIVE_SINGLE_PLAYLIST",
  REMOVE_PLAYLIST: "REMOVE_PLAYLIST"
};

export const fetchAllPlaylists = () => ({
  type: PlaylistConstants.FETCH_ALL_PLAYLISTS
});

export const receiveAllPlaylists = playlists => ({
  type: PlaylistConstants.RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const fetchUserPlaylists = currUser => ({
  type: PlaylistConstants.FETCH_ALL_PLAYLISTS,
  currUser
});

export const receiveUserPlaylists = playlists => ({
  type: PlaylistConstants.RECEIVE_USER_PLAYLISTS,
  playlists
});
