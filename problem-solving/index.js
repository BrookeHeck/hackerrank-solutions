const timeConversions = require('./time-conversion');

const time = '12:01:00AM';
const time2 = '07:05:45PM';
const time3 = '09:00:11AM';
const time4 = '12:00:00PM';

console.log(timeConversions(time));
console.log(timeConversions(time2));
console.log(timeConversions(time3));
console.log(timeConversions(time4));