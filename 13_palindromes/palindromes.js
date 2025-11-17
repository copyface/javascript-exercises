const palindromes = function (word) {
  const alphaNum = "abcdefghihklmnopqrstuvwxyz1234567890";
  const cleanWord = word
    .toLowerCase()
    .split("")
    .filter((character) => alphaNum.includes(character))
    .join("");

  const reversedString = cleanWord.split("").reverse().join("");

  return cleanWord === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
