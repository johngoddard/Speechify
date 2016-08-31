export const arrayToObject = array => {
  let newObj = {};
  array.forEach(el => {
    newObj[el.id] = el;
  });

  return newObj;
};
