// Extract substring between prefix and suffix

// Step 2
// Remove unnecessary variable

'use strict'

const getvaluebetween = (str, p, s) => {
  const i = str.indexOf(p) + p.length;
  if (i === -1) return '';
  else {
    str = str.substring(i);
    if (s) {
      const i = str.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;