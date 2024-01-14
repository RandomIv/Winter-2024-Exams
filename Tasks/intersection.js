// Find an intersection of two dictionaries

'use strict';

const intersectDictionaries = function intersectDictionaries(object1, object2) {
  for (const key of Object.keys(object1)) {
    if (object1[key] === object2[key]) {
      object2[key] = object1[key];
    } else {
      delete object1[key];
    }
  }
  return object1;
};

module.exports = intersectDictionaries;
