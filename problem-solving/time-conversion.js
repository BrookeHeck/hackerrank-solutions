'use strict';

function timeConversions(s) {
  const numChars = s.length;
  const indicator = s.substr(numChars - 2, numChars );
  let hour = parseInt(s.substr(0, 2));
  if(indicator === 'AM') {
    if(hour === 12) hour = '00';
    else hour = `0${hour}`;
  }
  else {
    hour += 12;
    if(hour === 24) hour = '12';
  }
  return `${hour}${s.substr(2, numChars - 4)}`;
}

module.exports = timeConversions;