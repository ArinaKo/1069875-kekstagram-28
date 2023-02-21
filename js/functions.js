const checkLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = 1; i < string.length / 2; i++) {
    if (string.at(i - 1) !== string.at(-i)) {
      return false;
    }
  }
  return true;
};

const extractNumbers = (string) => {
  string = string.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string.at(i), 10) || parseInt(string.at(i), 10) === 0) {
      number += string.at(i);
    }
  }
  return parseInt(number, 10);
};

const extendString = (string, minLength, addition) => {
  let additionLength = minLength - string.length;
  while (additionLength > 0) {
    string = addition.slice(0, additionLength) + string;
    additionLength = minLength - string.length;
  }
  return string;
};
