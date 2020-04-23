const caesar = function(pStr, pOffSet) {
  //declarations
  let alphabet;
  let newString = '';
  let alphabetIndex = 0;

  //when writing this, thought charAt() would take negative indexes
  //however, if it is < 0, then returns empty string ""

  if (pOffSet >= 0) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }
  else{
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('')
    pOffSet = -pOffSet;
  }

  for (var i = 0; i < pStr.length; i++) {
    //if the character is alphabet
    //then find it in alphabet and use offset

    if ( isLetter(pStr.charAt(i) ) ){
      alphabetIndex = alphabet.indexOf(pStr.charAt(i).toLowerCase())

      if ( isUpperCase(pStr.charAt(i)) ) {
        newString = newString.concat(alphabet.charAt( (alphabetIndex+pOffSet) % alphabet.length).toUpperCase());
      }
      else{
        newString = newString.concat(alphabet.charAt( (alphabetIndex+pOffSet) % alphabet.length));
      }

    }
    else{
      newString = newString.concat(pStr.charAt(i));
    }
  }
  return newString;

  //Helper functions
  function isLetter(pChar) {
  return (pChar.length === 1 && pChar.match(/[a-z]/i)) ? true : false;
  }
  function isUpperCase(pChar){
    return (pChar.length == 1 && pChar.match(/[A-Z]/)) ? true : false;
  }

}

module.exports = caesar
