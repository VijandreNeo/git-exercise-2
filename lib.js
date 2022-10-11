const square = (n) => n * n;

const fahrenheit = (celsius) => celsius * (9 / 5) + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => {
  const revArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    revArr.push(str.at(i));
  }

  let revStr = revArr.toString().replaceAll(',', '');

  return revStr.toUpperCase() === str.toUpperCase();
};

module.exports = {
  square,
  fahrenheit,
  rectangleArea,
  isPalindrome,
};
