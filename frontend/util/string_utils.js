export const reduceString = (str, length) => {
  if(str.length <= length){
    return str;
  } else {
    return `${str.slice(0, length - 2 )}...`;
  }
};
