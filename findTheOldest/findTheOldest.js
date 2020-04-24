let findTheOldest = function(arrayPersons) {

  const arrayYearsOld = arrayPersons.map(objPerson => {
    if (isNaN(objPerson.yearOfDeath - objPerson.yearOfBirth)){
      let objDate = new Date();
      return( {name: objPerson.name,
        age: objDate.getFullYear() - objPerson.yearOfBirth})
    }
    else {
      return ( {name: objPerson.name,
                age: objPerson.yearOfDeath - objPerson.yearOfBirth} );
    }
  });

  const arraySortedByAge = arrayYearsOld.sort((person1, person2) =>
    person1.age > person2.age ? 1 : -1
  );

return arraySortedByAge[arraySortedByAge.length-1];
}

module.exports = findTheOldest
