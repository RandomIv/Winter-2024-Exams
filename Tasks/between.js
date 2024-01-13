// Extract substring between prefix and suffix

// Step 5
// Fused if statement into one
// Changed order of lines

'use strict'

const getValueBetween = (string, prefix, sufix) => {
  const begin = string.indexOf(prefix) + prefix.length;
  string = string.substring(begin);
  const end = string.indexOf(sufix);
  if (begin === -1 || end === -1) return '';
  string = string.substring(0, end);
  return string;
};

module.exports = getValueBetween;