const { expect } = require("@jest/globals");

let {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

/*
 * Capitalize function testing
 */
test("Capitalize: normal word", () => {
  expect(capitalize("ahmed")).toBe("Ahmed");
});

test("Capitalize: empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize: large string", () => {
  expect(capitalize("my name is karim")).toBe("My name is karim");
});

test("Capitalize: already uppercase", () => {
  expect(capitalize("My name is karim")).toBe("My name is karim");
});

/*
 * Reverse String function testing
 */
test("reverseString: empty string ", () => {
  expect(reverseString("")).toBe("");
});

test("reverseString: normal word ", () => {
  expect(reverseString("ahmed")).toBe("demha");
});

test("reverseString: long string with spaces ", () => {
  expect(reverseString("My name is Shawky")).toBe("ykwahS si eman yM");
});

/*
 * Calculator object functions testing
 */
test("Calculator: adding two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator: multiplying two numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("Calculator: dividing two numbers", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("Calculator: dividing by zero", () => {
  expect(calculator.divide(1, 0)).toBe("can't divide by 0");
});

test("Calculator: substracting two numbers", () => {
  expect(calculator.substract(3, 1)).toBe(2);
});

test("Calculator: substracting two numbers to negative number as result", () => {
  expect(calculator.substract(1, 5)).toBe(-4);
});

/*
 * CaesarCipher function testing
 */
test("caesarCipher: one Word , key = 1", () => {
  expect(caesarCipher("ahmed", 2)).toBe("cjogf");
});

test("caesarCipher: multiple words with spaces , key = 2", () => {
  expect(caesarCipher("my name is ahmed", 2)).toBe("oa pcog ku cjogf");
});

test("caesarCipher: multiple words with spaces & puncituation , key = 6", () => {
  expect(caesarCipher("ahmed, how are you?", 6)).toBe("gnskj, nuc gxk eua?");
});

test("caesarCipher: multiple words with spaces & puncituation and capital letters , key = 6", () => {
  expect(caesarCipher("Ahmed, How are you?", 6)).toBe("Gnskj, Nuc gxk eua?");
});

test("caesarCipher: wrapping z to a  , key = 6", () => {
  expect(caesarCipher("Go to the Zoo", 6)).toBe("Mu zu znk Fuu");
});

test("analyzeArray: all functions", () => {
  expect(analyzeArray([2, 5, 7, 9])).toEqual({
    average: 5.75,
    min: 2,
    max: 9,
    length: 4,
  });
});
