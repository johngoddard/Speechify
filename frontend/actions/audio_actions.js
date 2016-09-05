export const AudioConstants = {
  PLAY_TRACK: "PLAY_TRACK",
  PAUSE_TRACK: "PLAY_TRACK",
  SET_CURRENT_TRACK: "SET_CURRENT_TRACK"
};

export const setCurrentTrack = track => ({
  type: AudioConstants.SET_CURRENT_TRACK,
  track
});

export const playTrack = () => ({
  type: AudioConstants.PLAY_TRACK
});

export const pauseTrack = () => ({
  type: AudioConstants.PAUSE_TRACK
});
