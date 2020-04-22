const palindromes = function(pStr) {
  //'string' ==> ['s','t','r','i','n','g']
  pStr = pStr.replace(/[^0-9a-z]/gi, '').toLowerCase()
  let arr = pStr.split('');
  // arr = arr.filter((character) => {
  //   if (character !== ' ' || character){
  //     return character
  //   }
  // }
  // );

  //if array size is even
  let arr1, arr2;

  if (arr.length % 2 === 0) {
    arr1 = arr.slice(0, arr.length/2);
    arr2 = arr.slice(arr.length/2, arr.length);
    arr2.reverse();

    let i = 0;
    let theEndOfArr = false;
    let arrsNotEqual = false;
    while (!(theEndOfArr)) {
      if (arr1[i] !== arr2[i]) {
        arrsNotEqual = true;
      }
      if (i === arr1.length){
        theEndOfArr = true;
      }
      i++;
    }
    return !arrsNotEqual; //if the two arrays are Equal, then they are palindromes
  }

  //array is odd
  else{
    arr1 = arr.slice(0, arr.length/2);
    arr2 = arr.slice((arr.length/2 + 1), arr.length); //remove the 'pivot' letter
    arr2.reverse();

    let i = 0;
    let theEndOfArr = false;
    let arrsNotEqual = false;
    while (!(theEndOfArr)) {
      if (arr1[i] !== arr2[i]) {
        arrsNotEqual = true;
      }
      if (i === arr1.length){
        theEndOfArr = true;
      }
      i++;
    }
    return !arrsNotEqual; //if the two arrays are Equal, then they are palindromes
  }
}

module.exports = palindromes
