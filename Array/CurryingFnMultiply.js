function multiplyAll(arr) {
   return number => arr.map(item => item * number);
}

/* 
function multiplyAll(arr) {
  return function(n) {
    return arr.map(x => x * n);
  }
}
----------------------------------------------------
const multiplyAll = arr => n => arr.map(x => n * x);
-----------------------------------------------------
function multiplyAll(arr){
  return function(n){
    var a=[]
    for (var i=0; i<arr.length; ++i)
      a.push(arr[i]*n)
    return a;
  }
}
*/

