const getTheTitles = function(arrayBooks) {
  const arrayTitles = arrayBooks.map(objBook => {
    return objBook.title;
  }
  );
  return arrayTitles
}

module.exports = getTheTitles;
