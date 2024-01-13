// Find key by value

'use strict';

const findKey = (object, ...values) => {
  const value = values.pop(1);
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
    }
  }
  return undefined;
};

module.exports = findKey;
