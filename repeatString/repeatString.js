const repeatString = function(str, num) {
    if (num < 0 ) {
      return 'ERROR'
    }
    else{
      newString = "";
      for (var i = 0; i < num; i++) {
        newString = newString.concat(str)
      }
      return newString;
    }
}

module.exports = repeatString
