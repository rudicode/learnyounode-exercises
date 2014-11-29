// first_io.js
var fs = require('fs');

file = fs.readFile(process.argv[2], function(err,data){
  if (err){
    console.log("There was an error: "+err);
  } else {
    var newLineCount = data.toString().split('\n').length - 1;
    console.log(newLineCount); //this is correct
  }
});

