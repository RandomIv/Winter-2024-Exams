// Return an array without duplicates

//duplicate is fixed. Test is passed: 5 of 5

'use strict';

const duplicate = (value, duplicatesAmount) => {
  const text = [];
  for (let i = 0; i < duplicatesAmount; i++) {
    text[i] = value;
  }
  return text;
};

module.exports = duplicate;
