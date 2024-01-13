// Extract substring between prefix and suffix

// Step 4
// Removed unnecessary if...else statements

'use strict'

const getValueBetween = (string, prefix, sufix) => {
  const begin = string.indexOf(prefix) + prefix.length;
  if (begin === -1) return '';
  string = string.substring(begin);
  const end = string.indexOf(sufix);
  if (end === -1) {
    return '';
  }
  string = string.substring(0, end);
  return string;
};

module.exports = getValueBetween;