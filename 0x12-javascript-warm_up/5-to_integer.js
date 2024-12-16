#!/usr/bin/node
const { argv } = require('node:process');
const i = 2;

console.log(isNaN(argv[2]) ? 'Not a number' : `My number: ${argv[2]}`);
