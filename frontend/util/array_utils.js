export const arrayToObject = array => {
  let newObj = {};
  array.forEach(el => {
    newObj[el.id] = el;
  });

  return newObj;
};

export const sortTracks = (tracks, order) => {
  return tracks.sort((t1, t2) => order[t1.id] - order[t2.id]);
};
