// Find key by value

'use strict';

const findKey = (object, ...values) => {
  for (const [key, value] of Object.entries(object)) {
    if (value === values[0]) {
      return key;
    }
  }
};

module.exports = findKey;
