// first_io.js
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var newLineCount = buffer.toString().split('\n').length - 1
console.log(newLineCount);