// filtered-ls.js
var fs   = require('fs');
var path = require('path');

dir = fs.readdir(process.argv[2], function (err,files) {
  for (var i = 0; i < files.length; i++) {
    if ( path.extname(files[i]) === ('.'+process.argv[3])){
      console.log( files[i] );
    }

  };
})