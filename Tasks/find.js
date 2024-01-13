// Find key by value

'use strict';

const findKey = (object, ...values) => {
  for (const key in object) {
    if (object[key] === values[0]) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
