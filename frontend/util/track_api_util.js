export const fetchAllTracks = (success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/tracks",
    success,
    error
  });
};

export const createTrack = (track, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: track,
    success,
    error
  });
};

export const updateTrack = (track, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: track,
    success,
    error
  });
};

export const destroyTrack = (track, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/tracks/${track.id}`,
    data: track,
    success,
    error
  });
};
