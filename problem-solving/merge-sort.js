'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const middle = Math.floor(n / 2) - 1;

    const left = [];
    for (let i = 0; i <= middle; i++) {
      left.push(arr[i]);
    }

    const right = [];
    for (let i = middle + 1; i < arr.length; i++) {
      right.push(arr[i]);
    }

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] <= right[rightIndex]) {
      arr[arrIndex] = left[leftIndex];
      leftIndex++;
    } else {
      arr[arrIndex] = right[rightIndex];
      rightIndex++;
    }
    arrIndex++;
  }

  while(leftIndex < left.length) {
    arr[arrIndex] = left[leftIndex];
    leftIndex++;
    arrIndex++;
  }

  while(rightIndex < right.length) {
    arr[arrIndex] = right[rightIndex];
    rightIndex++;
    arrIndex++;
  }
}

module.exports = mergeSort;