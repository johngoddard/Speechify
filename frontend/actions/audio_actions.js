export const AudioConstants = {
  PLAY_TRACK: "PLAY_TRACK",
  PAUSE_TRACK: "PAUSE_TRACK",
  SET_CURRENT_TRACK: "SET_CURRENT_TRACK",
  ADD_TO_QUEUE: "ADD_TO_QUEUE",
  GO_FORWARD: "GO_FORWARD",
  GO_BACK: "GO_BACK",
  PLAY_PLAYLIST: "PLAY_PLAYLIST",
  SET_QUEUE_POSITION: "SET_QUEUE_POSITION"
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

export const addToQueue = track => ({
  type: AudioConstants.ADD_TO_QUEUE,
  track
});

export const goBack = () => ({
  type: AudioConstants.GO_BACK
});

export const goForward = () => ({
  type: AudioConstants.GO_FORWARD
});

export const playPlaylist = (playlist, startIdx) => ({
  type: AudioConstants.PLAY_PLAYLIST,
  playlist,
  startIdx
});

export const setQueuePosition = pos => ({
  type: AudioConstants.SET_QUEUE_POSITION,
  pos
});
