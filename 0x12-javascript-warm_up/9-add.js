#!/usr/bin/node
const { argv } = require('node:process');

const a = argv[2];
const b = argv[3];

function add (a, b) {
  return (a === undefined || b === undefined) ? NaN : (Number(a) + Number(b));
}

console.log(add(a, b));
