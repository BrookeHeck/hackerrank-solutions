'use strict';

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numApples = 0;
  let numOranges = 0;
  let n = apples.length >= oranges.length ? apples.length : oranges.length;

  for(let i = 0; i < n; i++) {
    if(apples[i]) {
      const d = apples[i] + a;
      if(d >= s && d <= t) numApples++;
    }
    if(oranges[i]) {
      const d = oranges[i] + b;
      if(d >= s && d <= t) numOranges++;
    }
  }
  console.log(numApples);
  console.log(numOranges);
}