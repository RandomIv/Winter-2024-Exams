// Find an intersection of two dictionaries

'use strict';

const intersectDictionaries = function intersectDictionaries(object1, object2) {
  const result = {};
  for (const key of Object.keys(object1)) {
    if (object2.hasOwnProperty(key) && object1[key] === object2[key]) {
      result[key] = object1[key];
    }
  }
  return result;
};

module.exports = intersectDictionaries;
