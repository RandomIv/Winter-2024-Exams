// Copy only listed values from dict

//only is fixed. Test is passed: 7 of 7

'use strict';

const onlyListedValues = (object, ...values) => {
  for(const key of Object.keys(object)){
    if (!values.includes(key)) {
      delete object[key];
    }
  }
  return object;
};

module.exports = onlyListedValues;
