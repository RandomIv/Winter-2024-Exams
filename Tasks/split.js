// Split an array into two parts

'use strict';

const splitArrayIntoTwo = (index, array) => {
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index, array.length);
  return [firstPart, secondPart];
};

module.exports = splitArrayIntoTwo;
