const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (array) {
  return array.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return oldestAge < currentAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
