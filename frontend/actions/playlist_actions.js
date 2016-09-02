export const PlaylistConstants = {
  FETCH_ALL_PLAYLISTS: "FETCH_ALL_PLAYLISTS",
  FETCH_USER_PLAYLISTS: "FETCH_USER_PLAYLISTS",
  FETCH_CURR_USER_PLAYLISTS: "FETCH_USER_PLAYLISTS",
  FETCH_PLAYLIST_DETAIL: "FETCH_PLAYLIST_DETAIL",
  CREATE_PLAYLIST: "CREATE_PLAYLIST",
  UPDATE_PLAYLIST: "UPDATE_PLAYLIST",
  DESTROY_PLAYLIST: "DESTROY_PLAYLIST",
  RECEIVE_ALL_PLAYLISTS: "RECEIVE_ALL_PLAYLISTS",
  RECEIVE_CURR_USER_PLAYLISTS: "RECEIVE_CURR_USER_PLAYLISTS",
  RECEIVE_PLAYLIST_DETAIL: "RECEIVE_PLAYLIST_DETAIL",
  RECEIVE_CURR_PLAYLIST: "RECEIVE_CURR_PLAYLIST",
  REMOVE_PLAYLIST: "REMOVE_PLAYLIST",
  ADD_PLAYLIST_TRACK: "ADD_PLAYLIST_TRACK",
  DELETE_PLAYLIST_TRACK: "DELETE_PLAYLIST_TRACK"
};

export const fetchAllPlaylists = () => ({
  type: PlaylistConstants.FETCH_ALL_PLAYLISTS
});

export const receiveAllPlaylists = playlists => ({
  type: PlaylistConstants.RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const fetchCurrentUserPlaylists = user => ({
  type: PlaylistConstants.FETCH_CURR_USER_PLAYLISTS,
  user
});

export const receiveCurrentUserPlaylists = playlists => ({
  type: PlaylistConstants.RECEIVE_CURR_USER_PLAYLISTS,
  playlists
});

export const createPlaylist = playlist => ({
  type: PlaylistConstants.CREATE_PLAYLIST,
  playlist
});

export const receiveCurrPlaylist = playlist => ({
  type: PlaylistConstants.RECEIVE_CURR_PLAYLIST,
  playlist
});

export const fetchPlaylistDetail = (id) => ({
  type: PlaylistConstants.FETCH_PLAYLIST_DETAIL,
  id
});

export const receivePlaylistDetail = playlist => ({
  type: PlaylistConstants.RECEIVE_PLAYLIST_DETAIL,
  playlist
});

export const updatePlaylist = playlist => ({
  type: PlaylistConstants.UPDATE_PLAYLIST,
  playlist
});

export const addPlaylistTrack = (playlistId, trackId) => ({
  type: PlaylistConstants.ADD_PLAYLIST_TRACK,
  playlistId,
  trackId
});

export const deletePlaylistTrack = (playlistId, trackId) => ({
  type: PlaylistConstants.DELETE_PLAYLIST_TRACK,
  playlistId,
  trackId
});
