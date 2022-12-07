'use strict';

function gradingStudents(grades) {
  const finalGrades = [];

  for (let i = 1; i < grades.length; i++) {
    // for a failing grad
    if (grades[i] < 38) finalGrades.push(grades[i]);

    // find rounding up multiple of five
    else {
      let nearestMultiple = grades[i];
      while (grades[i] % 5 !== 0) {
        nearestMultiple++;
      }
      if ((nearestMultiple - grades[i]) < 3) {
        grades[i] = nearestMultiple;
      }
      finalGrades.push(grades[i]);
    }
  }
}

module.exports = gradingStudents;