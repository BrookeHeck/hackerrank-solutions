'use strict';

function kangaroo(x1, v1, x2, v2) {
  if(x1 === x2 && v1 === v2) return 'YES';
  if(x1 !== x2 && v1 === v2) return 'NO';

  const faster = v1 > v2 ? [x1, v1] : [x2, v2];
  const slower = v1 < v2 ? [x1, v1] : [x2, v2];

  if(faster[0] >= slower[0]) return 'NO';

  while(faster[0] < slower[0]) {
    faster[0] += faster[1];
    slower[0] += slower[1];
    if(slower[0] === faster[0]) return 'YES';
  }
  return 'NO';
}

module.exports = kangaroo;