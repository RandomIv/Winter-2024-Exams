// Extract substring between prefix and suffix

// Step 6
// Fused 11, 14, 15 lines into one

'use strict'

const getValueBetween = (string, prefix, sufix) => {
  const begin = string.indexOf(prefix) + prefix.length;
  const end = string.indexOf(sufix);
  if (begin === -1 || end === -1) return '';
  return string.substring(begin, end);
};

module.exports = getValueBetween;