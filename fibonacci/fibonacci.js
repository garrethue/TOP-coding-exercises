const fibonacci = function(theXthMember) {
  if (theXthMember < 0) {
    return "OOPS"
  }
  let fibonacciSeries = [];
  let oneAway, twoAway;
  for (var i = 0; i < (theXthMember+1); i++) {
    if (i === 0 || i === 1) { //edge case
      fibonacciSeries.push(1);
    }
    else{ //look at previous two enties, add them, and push
      oneAway = fibonacciSeries[i - 1];
      twoAway = fibonacciSeries[i - 2];
      fibonacciSeries.push(oneAway+twoAway);
    }
  }
  return fibonacciSeries[theXthMember-1];
}

module.exports = fibonacci
