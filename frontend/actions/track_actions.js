export const TrackConstants = {
  FETCH_ALL_TRACKS: "FETCH_ALL_TRACKS",
  CREATE_TRACK: "CREATE_TRACK",
  UPDATE_TRACK: "UPDATE_TRACK",
  DESTROY_TRACK: "DESTROY_TRACK",
  RECEIVE_ALL_TRACKS: "RECEIVE_ALL_TRACKS",
  RECEIVE_SINGLE_TRACK: "RECEIVE_SINGLE_TRACK",
  REMOVE_TRACK: "REMOVE_TRACK"
};

export const fetchAllTracks = currUser => ({
  type: TrackConstants.FETCH_ALL_TRACKS,
  currUser
});

export const createTrack = track => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const updateTrack = track => ({
  type: TrackConstants.UPDATE_TRACK,
  track
});

export const destroyTrack = track => ({
  type: TrackConstants.DESTROY_TRACK,
  track
});

export const receiveAllTracks = tracks => ({
  type: TrackConstants.RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveSingleTrack = track => ({
  type: TrackConstants.RECEIVE_SINGLE_TRACKS,
  track
});

export const removeTrack = track => ({
  type: TrackConstants.REMOVE_TRACK,
  track
});
