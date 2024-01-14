// Get one random element from an array

'use strict'

const sample = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = sample;
