'use strict';

function timeConversions(time) {
  const numChars = time.length;
  const indicator = time.substr(numChars - 2, numChars);
  if(indicator === 'AM') return time.substr(0, numChars - 2);
  else {
    let hour = parseInt(time.substr(0, 2));
    hour += 12;
    if(hour === 24) hour = '00';
    return `${hour}${time.substr(2, numChars - 2)}`;
  }
}

module.exports = timeConversions;