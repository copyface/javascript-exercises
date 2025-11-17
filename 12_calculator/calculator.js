const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, number) => total + number, 0);
};

const multiply = function (array) {
  return array.reduce((product, num) => product * num, 1);
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  if (number < 0) {
    undefined;
  }

  if (number === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
