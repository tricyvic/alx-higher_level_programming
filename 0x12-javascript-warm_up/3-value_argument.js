#!/usr/bin/node
const { argv } = require('process');

let i = 2;
let printed = false;
while (true) {
  if (argv[i] === undefined) {
    if (printed) {
      break;
    }
    console.log('No argument');
    break;
  } else {
    console.log(argv[i]);
    printed = true;
    i++;
  }
}
