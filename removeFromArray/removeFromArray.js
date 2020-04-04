const removeFromArray = function(arr) {
  let argsArr = Array.prototype.slice.call(arguments, 1);
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    let boolAdd = true;
    for (var j = 0; j < argsArr.length; j++) {
      if (arr[i] === argsArr[j]){
        boolAdd  = false;
      }
    }
    if (boolAdd){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = removeFromArray
