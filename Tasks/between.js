// Extract substring between prefix and suffix

// Step 3
// Formatted naming

'use strict'

const getValueBetween = (string, prefix, sufix) => {
  const begin = string.indexOf(prefix) + prefix.length;
  if (begin === -1) return '';
  else {
    string = string.substring(begin);
    if (sufix) {
      const end = string.indexOf(sufix);
      if (end === -1) {
        return '';
      } else {
        string = string.substring(0, end);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;