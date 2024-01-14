// Find an intersection of two dictionaries

//intersection is fixed. Test is passed: 5 of 5

'use strict';

const intersectDictionaries = (dict1, dict2) => {
  const result = {};
  for (const [key, value] of Object.entries(dict1)) {
    if (dict2.hasOwnProperty(key) && value === dict2[key]) {
      result[key] = value;
    }
  }
  return result;
}

module.exports = intersectDictionaries;
