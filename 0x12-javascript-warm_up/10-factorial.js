#!/usr/bin/node
const { argv } = require('node:process');

let sum = 1;
const factor = (n) => {
  if (n === 1) {
    console.log(sum);
  } else {
    sum *= n;
    factor(n - 1);
  }
};

if (argv[2] > 1) {
  factor(Number(argv[2]));
} else {
  console.log(sum);
}
