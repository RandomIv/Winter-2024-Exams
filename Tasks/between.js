// Extract substring between prefix and suffix

// Step 1
// Added 'use strict';
// Added const for function and constants

'use strict'

const getvaluebetween = (str, p, s) => {
  const i = str.indexOf(p);
  if (i === -1) return '';
  else {
    const k = i + p.length;
    str = str.substring(k);
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
