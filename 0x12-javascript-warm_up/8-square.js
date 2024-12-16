#!/usr/bin/node
const { argv } = require('node:process');
let print = '';

if (argv[2] >= 0 || argv[2] < 0) {
  if (argv[2] > 0) {
    for (let i = 0; i < argv[2]; i++) {
      for (let j = 0; j < argv[2]; j++) {
        print += 'X';
      }
      console.log(print);
      print = '';
    }
  }
} else {
  console.log('Missing size');
}