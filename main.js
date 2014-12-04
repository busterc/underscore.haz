module.exports =  function(_){
  _.mixin({
    haz: function(object, key) {
      var keys = key.split('.');
      while (!!keys.length) {
        var _key = keys.shift();
        if (!_.has(object, _key)) {
          return false;
        }
        object = object[_key];
      }
      return true;
    }
  });
};