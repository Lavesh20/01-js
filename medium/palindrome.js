/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowerCaseStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = lowerCaseStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  if (lowerCaseStr === reversedStr){
    return true
  }
  return false;
}

module.exports = isPalindrome;
