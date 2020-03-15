function fizzbuzz(n) {
   let arr = [];
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         arr.push('FizzBuzz')
      } else
      if (i % 3 === 0) {
         arr.push('Fizz');
      } else
      if (i % 5 === 0) {
         arr.push('Buzz');
      } else arr.push(i);
   }
   return arr;
}


/* 
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}
------------------------------------------------------------
fizzify = fizzbuzz;
function fizzbuzz(n) {
  return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}
---------------------------------------------------------------------
function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;
*/