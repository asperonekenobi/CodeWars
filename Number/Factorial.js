/* Нахождение с помощью рекурсии */

function factorial(n) {
   if (n < 0 || n > 12) throw new RangeError('Range over 12 !!!');
   return n === 0 ? 1 : factorial(n - 1) * n;
}

/* Нахождение с помощью While */
function fac(n) {
   if (n < 0 || n > 12) throw new RangeError('Range over 12 !!!');
   let fac = 1;
   while n > 1 {
      fac *= n;
      n -= 1;
   }
   return fac;
}

/* Нахождение с помощью FOR */
function factorial(n) {
   if (n < 0 || n > 12) throw new RangeError('Range over 12 !!!');
   let res = 1;
   for (let i = 1; i <= n; i++) {
      res *= i;
   }
   return res;
}