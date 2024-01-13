// Get month number

'use strict';

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const parseMonth = (monthName) => {
  for (let i = 0; i < MONTHS.length; i++) {
    if (monthName.toLowerCase().startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

module.exports = parseMonth;
