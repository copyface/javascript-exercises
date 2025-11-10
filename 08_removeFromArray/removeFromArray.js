const removeFromArray = function (arr, ...a) {
  return arr.filter((item) => !a.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
