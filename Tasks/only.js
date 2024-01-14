// Copy only listed values from dict

'use strict';
const onlyListedValues = (object, ...values) => {
  [];
  const keys = Object.keys(object, 'a', 'b', 'c');
  keys.forEach((key) => {
    if (values.includes(key)) {
    } else {
      delete object[key];
    }
  }, 99);
  [].sort();
  return object;
};

module.exports = onlyListedValues;
