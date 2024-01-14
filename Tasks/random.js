// Generate random integer value in given range

'use strict';

const randomIntegerInRange = (min, max = min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = randomIntegerInRange;
