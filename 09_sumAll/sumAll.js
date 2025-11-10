const sumAll = (a, b) => {
  let sum = 0;
  if (!Number.isInteger(a) || !Number.isInteger(b)) { return "ERROR" };
  if (a === b) { return "ERROR" };
  if (a < 0 || b < 0) { return "ERROR" };
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
