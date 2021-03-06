export const FormConstants = {
  RECEIVE_SESSION_ERRORS: "RECEIVE_SESSION_ERRORS",
  CLEAR_SESSION_ERRORS: "CLEAR_SESSION_ERRORS",
  RECEIVE_USER_ERRORS: "RECEIVE_USER_ERRORS",
  CLEAR_USER_ERRORS: "CLEAR_USER_ERRORS",
  RECEIVE_TRACK_ERRORS: "RECEIVE_TRACK_ERRORS",
  CLEAR_TRACK_ERRORS: "CLEAR_TRACK_ERRORS",
  RECEIVE_PLAYLIST_ERRORS: "RECEIVE_PLAYLIST_ERRORS",
  CLEAR_PLAYLIST_ERRORS: "CLEAR_PLAYLIST_ERRORS"
};

export const receiveSessionErrors = errors => ({
  type: FormConstants.RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: FormConstants.CLEAR_SESSION_ERRORS
});

export const clearUserErrors = () => ({
  type: FormConstants.CLEAR_USER_ERRORS
});

export const receiveUserErrors = errors => ({
  type: FormConstants.RECEIVE_USER_ERRORS,
  errors
});

export const receiveTrackErrors = errors => ({
  type: FormConstants.RECEIVE_TRACK_ERRORS,
  errors
});

export const clearTrackErrors = () => ({
  type: FormConstants.CLEAR_TRACK_ERRORS
});

export const receivePlaylistErrors = errors => ({
  type: FormConstants.RECEIVE_PLAYLIST_ERRORS,
  errors
});

export const clearPlaylistErrors = () => ({
  type: FormConstants.CLEAR_PLAYLIST_ERRORS
});
