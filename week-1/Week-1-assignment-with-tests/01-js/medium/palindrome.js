/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var str1 = str.toLowerCase().split(" ").join("");
  var str2 = str1.split("").reverse().join("");
  console.log(str1,str2);
  str1 = str1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  str2 = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  console.log(str1.localeCompare(str2));
  console.log(str1,str2);
  if(str1.localeCompare(str2) == 0) {
    return true;
  }
  else {
    return false;
  }
}

isPalindrome('Eva, can I see bees in a cave?');

module.exports = isPalindrome;
