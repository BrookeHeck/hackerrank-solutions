'use strict';

function gridChallenge(grid) {
  const gridArr = [];
  grid.forEach(str => {
    const charArr = str.split('');
    const sortedArr = charArr.sort();
    gridArr.push(sortedArr);
  });

  const isSorted = gridArr.every((charArr, index) => {
    let next = gridArr[index + 1];
    let isValid = true;
    if(next) {
      for(let i = 0; i < charArr.length; i++) {
        if(charArr[i] <= next[i]) isValid = true;
        else {
          isValid = false;
          break;
        };
      }
    } else isValid = true;
    return isValid;
  });
  return isSorted ? 'YES' : 'NO';
}

module.exports = gridChallenge;