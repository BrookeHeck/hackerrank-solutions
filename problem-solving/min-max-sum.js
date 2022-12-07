'use strict';

const mergeSort = require('./merge-sort');

function minMaxSum(arr) {
	// arr.sort((num1, num2) => num1 - num2);
	console.log(mergeSort);
	mergeSort(arr);
	console.log(arr);
	const min = sum(arr.slice(0, 4));
	const max = sum(arr.slice(1, 5));
	console.log(`${min} ${max}`);
}

function sum(intArr) {
	const sum = 0;
	for(let i of intArr) {
		sum += i;
	}
}

module.exports = minMaxSum;