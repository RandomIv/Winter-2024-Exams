// Split an array into two parts

//split is fixed. Test is passed: 6 of 6

'use strict';

const splitArrayIntoTwo = (index, array) => {
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index, array.length);
  return [firstPart, secondPart];
};

module.exports = splitArrayIntoTwo;
