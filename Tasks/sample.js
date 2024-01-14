// Get one random element from an array

//sample is fixed. Test is passed: 2 of 2

'use strict'

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = sample;
