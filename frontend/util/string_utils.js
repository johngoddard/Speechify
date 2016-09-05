export const reduceString = (str, length) => {
  if(str.length <= length){
    return str;
  } else {
    return `${str.slice(0, length - 2 )}...`;
  }
};

export const formatTime = string => {
  let time = parseInt(string);
  let minutes = Math.floor(time / 60 / 1000).toString();
  let seconds = Math.floor((time / 1000) % 60).toString();

  seconds = seconds.length === 1 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};
