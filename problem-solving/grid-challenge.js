'use strict';

function gridChallenge(grid) {
  // return selectionSort(grid);
  return sort(grid);
}

function sort(str) {
  let charArr = str.split('');
  let sortedArr = charArr.sort();
  return sortedArr.join('');
}

function selectionSort(str) {
  let charArr = str.split('');
  const n = charArr.length;

  for (let i = 0; i < n; i++) {
    for (let j = (i + 1); j < n; j++) {
      let min = i;
      if (charArr[i] > charArr[j]) min = j;
      let temp = charArr[min];
      charArr[min] = charArr[i];
      charArr[i] = temp;
    }
  }

  return charArr.join('');
}

module.exports = gridChallenge;