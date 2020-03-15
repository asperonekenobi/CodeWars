function solution(str) {
   let reverseStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
      reverseStr = reverseStr + str[i];
   }
   return reverseStr;
}

/*
 function solution(str){
  return str.split('').reverse().join('');  
}
---------------------------------------------- 
const solution = str => str.split('').reverse().join('');
----------------------------------------------
const solution = s => [...s].reverse().join('')
  */