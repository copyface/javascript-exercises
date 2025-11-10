const reverseString = function (word) {
  let reversed = "";
  for (let i = word.length; i > 0; i--) {
    reversed += word[i - 1];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
