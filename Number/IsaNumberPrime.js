
/* Просто́е число́ — натуральное (целое положительное) число, имеющее ровно два различных натуральных делителя — единицу и самого себя. */


/* Лучшая скорость выполнения
function isPrime(num) {
   if(isNaN(num) || num <= 0 || num != num << 0 || num == 1) return false;
    if(num < 4) return true;
    if(num % 2 == 0 || num % 3 == 0) return false;
    for(let i = 5, N = Math.sqrt(num); i <= N; i += 2)
        if(num % i == 0) return false;
    return num>1;
} */



function isPrime(num) {
   for(var i = 2,sq = Math.sqrt(num); i <= sq; i++)
   if(num % i === 0) return false;
 return num > 1;
}

/* 
function isPrime(n) {
 if(n==1) // 1 - не простое число
		return false;
	// перебираем возможные делители от 2 до sqrt(n),получаем возведением в квадрат d
	for(let d=2; d*d<=n; d++){ 
		// если разделилось нацело, то составное
		if(n%d==0) 
			return false;
		}
	// если нет нетривиальных делителей, то простое
	return n>1;
}
 */


/* Не оптимизированный код ниже */
function isPrime(num) {
   for(var i = 2; i < num; i++)
   if(num % i === 0) return false;	// если разделилось нацело, то составное
 return num > 1;
}
