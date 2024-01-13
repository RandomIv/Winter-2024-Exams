// Get day number

//day is fixed. Test is passed: 5 of 5

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (dayName) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (dayName.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay