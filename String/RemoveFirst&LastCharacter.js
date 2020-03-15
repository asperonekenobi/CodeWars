function removeChar(str) {
   str = str.substring(1, str.length - 1);
   return str;
}

/* 
function removeChar(str) {
  return str.slice(1, -1);
}
-----------------------------------------
const removeChar = str => str.slice(1,-1)
-----------------------------------------
function removeChar(str){
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');  
};
----------------------------------------
*/