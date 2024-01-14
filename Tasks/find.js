// Find key by value

//find is fixed. Test is passed: 5 of 5

'use strict';

const findKey = (object, ...values) => {
  for (const [key, value] of Object.entries(object)) {
    if (value === values[0]) {
      return key;
    }
  }
};

module.exports = findKey;
