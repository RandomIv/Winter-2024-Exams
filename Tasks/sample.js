// Get one random element from an array

'use strict'

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = sample;
