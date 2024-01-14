// Copy only listed values from dict

'use strict';
const onlyListedValues = (object, ...values) => {
  for(const key of Object.keys(object)){
    if (values.includes(key)) {
    }
    else {
      delete object[key];
    }
  }
  return object;
};

module.exports = onlyListedValues;
