const reverseString = function(str) {
  let strArr = str.split(""); //['m','a','s','d','d']
  let tempVar;

  for (var i = 0; i < strArr.length/2; i++) {
    tempVar = strArr[i];
    strArr[i] = strArr[strArr.length - 1 - i];
    strArr[strArr.length - 1 - i] = tempVar;
  }
  str = strArr.join('');

  return str;
}

module.exports = reverseString
