String.prototype.vowel = function () {
   let str = this.slice();//получаем строку
   return (str.match(/^[aeiou]{1}$/i)) ? true : false;// i - 	Регистронезависимый поиск.
};

/*  
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
}
--------------------------------------
String.prototype.vowel = function() {
  return /^[aeiouAEIOU]$/.test(this);
};
*/