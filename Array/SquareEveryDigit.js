function squareDigits(num) {
   //Число -> Строка -> Массив
   let arr = String(num).split('');
   //Новый массив -> Строка
   let res = arr.map(item => item * item).join('');
   //Строка -> Число
   return +res;
}




/* 
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
-----------------------------------------------------
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
---------------------------------------------------------
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}
-------------------------------------------------------
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};
*/