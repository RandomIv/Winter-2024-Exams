// Split an array into two parts

'use strict';

const splitArrayIntoTwo = (index, array) => {
  const firstPart = array.slice(0, index);
  const length = array.length;
  const secondPart = array.slice(index, length);
  return [firstPart, secondPart];
};

module.exports = splitArrayIntoTwo;
