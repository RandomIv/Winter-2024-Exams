// Return an array without duplicates

'use strict'

const duplicate = (value, duplicatesAmount) => {
  if (duplicatesAmount <= 0) return [];
  else {
    const text = [];
    for (let i = 0; i < duplicatesAmount; i++) {
      text[i] = value;
    }
    return text;
  }
};

module.exports = duplicate;