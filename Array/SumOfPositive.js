function sunArr(array) {
   let sum = 0;
   array.forEach(element => {
      if (element > 0) {
         sum += element;
      }
   });
   return sum;
}

/* 
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
----------------------------------------------------
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
---------------------------------------------------
function positiveSum (arr) {
   return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
*/