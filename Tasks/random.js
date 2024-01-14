// Generate random integer value in given range

//random is fixed. Test is passed: 3 of 3

'use strict';

const randomIntegerInRange = (min, max = min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = randomIntegerInRange;
