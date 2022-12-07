'use strict';

function birthdayCakeCandles(candles) {
  const height = findTallestCandle(candles);
  let numCandles = 0;
  for(let i of candles) {
    if(i === height) numCandles++;
  }
  return numCandles;
}

function findTallestCandle(candles) {
  let tallest = 0;
  for(let i of candles) {
    if(i > tallest) tallest = i;
  }
  return tallest;
}

module.exports = birthdayCakeCandles;