const { toASCII } = require("punycode");

// Capitalize the first letter
function capitalize(word) {
  let result;
  word == ""
    ? (result = "")
    : (result = word.substring(0, 1).toUpperCase() + word.substring(1));

  return result;
}

//Helper Function
function reverseWord(word) {
  let result = "";
  for (let i in word) {
    result = word[i] + result;
  }
  return result;
}
// Reversing String
function reverseString(word) {
  let result;
  word == "" ? (result = "") : (result = reverseWord(word));

  return result;
}

// Calculator object with functionality of divide,add,substract & multiply
let calculator = {
  divide: function (a, b) {
    return b == 0 ? "can't divide by 0" : a / b;
  },
  add: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  substract: function (a, b) {
    return a - b;
  },
};

// Helper Function
function decryptChar(char, key) {
  let ascii = char.charCodeAt(0);

  let result =
    ascii >= 97
      ? ((ascii - 97 + key) % 26) + 97
      : ((ascii - 65 + key) % 26) + 65;

  return String.fromCharCode(result);
}
//caesarCipher Function to encrypt a message
function caesarCipher(message, key) {
  let result = "";
  for (let char in message) {
    message[char].match(/^[a-zA-z]+$/gm)
      ? (result += decryptChar(message[char], key))
      : (result += message[char]);
  }

  return result;
}

// function returns an object with result of functions : average, min, max & length
function analyzeArray(array) {
  return {
    average:
      array.reduce((sum, number) => {
        return sum + number;
      }, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
