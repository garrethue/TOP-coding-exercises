const ftoc = function(inputNum) {
  //check if user-input is a number or at least a string
  if (typeof inputNum == 'number' || typeof inputNum == 'string'){
    return (Math.round( ((inputNum - 32) * (5/9)) * 10 )) / 10
  }
  else{
    return 'ERROR'
  }
}

const ctof = function(inputNum) {
  //check if user-input is a number or at least a string
  if (typeof inputNum == 'number' || typeof inputNum == 'string'){
    return (Math.round( ((inputNum * (9/5)) + 32) * 10 ) / 10)
  }
  else{
    return 'ERROR'
  }
}

module.exports = {
  ftoc,
  ctof
}
