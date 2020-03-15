function isPalindrome(line) {
   let reverseStr = "";
   reverseStr = String(line).split("").reverse().join("");
   if (line == reverseStr) {
      return true;
   } else
      return false;
}

/* 
function isPalindrome(line) {
  return (line.toString() == line.toString().split('').reverse().join(''));
}
--------------------------------------------------------------------------
const isPalindrome = line => line == line.split('').reverse().join('')
 */