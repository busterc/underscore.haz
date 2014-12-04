var libraries = ['underscore', 'lodash'];
var library = 0;
var _;

for (library; library < libraries.length; library++) {
  _ = require(libraries[library]);

  require('./main')(_);

  var o = {
    a: {
      b: {
        c: 'note'
      }
    }
  };

  if(!_.haz(o, 'a.b.c')){
    throw new Error('sumpin iz wrung');
  }
}
console.log('itz good');