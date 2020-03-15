function cake(x, y) {
   let sum = 0;

   for (let i = 0; i < y.length; i++) {
      if (i % 2 === 0) {
         sum += y.charCodeAt(i); //Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу
      } else sum += y.charCodeAt(i) - 96;
   }

   if (sum > x * 0.7) {
      return 'Fire!';
   } else return 'That was close!';
}

/* 
function cake(x, y){
  let a = y.split("");
  let res = 0;
  for (i in a){
    res += i % 2 == 0 ? a[i].charCodeAt(0) : a[i].charCodeAt(0) - 96;
  }
  return res > x * 0.7 ? 'Fire!': 'That was close!';
}
-------------------------------------------------------------------
cake=(x,y)=>[...y].reduce((sum,c,i)=>sum+c.charCodeAt()-(i%2?97:0),0)<x*0.7?'That was close!':'Fire!'
-------------------------------------------------------------------
function cake(x, y){
var sum=0;
for(var i=0;i<y.length;++i)
if (i%2==1)
sum+=i+1
else
sum+=y[i].charCodeAt()+1;
console.log(x+' '+sum)
return x*0.7>sum?'That was close!':'Fire!'
}
*/