// Copy only listed values from dict

'use strict';
const onlyListedValues = (object, ...values) => {
  const keys = Object.keys(object);
  keys.forEach((key) => {
    if (values.includes(key)) {
    } else {
      delete object[key];
    }
  });
  return object;
};

module.exports = onlyListedValues;
