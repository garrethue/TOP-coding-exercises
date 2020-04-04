const sumAll = function(num1, num2) {
  theSum = 0;
  //check if num1 < num2
  if (num1 > num2){
    tempVar = num2;
    num2 = num1;
    num1 = tempVar;
  }
  //check if either of the num arguments are not a num datatype
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return 'ERROR'
  }
  //check if either of the num arguments are negative
  if (num1 < 0 || num2 < 0){
    return 'ERROR'
  }

  for (var i = num1; i <= num2; i++) {
      theSum += i
  }

  return theSum
}

module.exports = sumAll
