#!/usr/bin/node
const { argv } = require("process");

const arr = argv.slice(2)
const sorted = (arr.filter(n=>!isNaN(n))).sort((a,b)=>b-a)

console.log(sorted[1]==undefined? 0 : sorted[1]);
