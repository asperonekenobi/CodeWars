String.prototype.isLetter = function () {
   let str = this.slice(); //получаем строку 
   return (str.match(/^[a-zA-Z]$/)) ? true : false;
}


/* 
String.prototype.isLetter = function() {
  if (this.split('').length > 1) return false;
  let regex = /[a-zA-Z]/;
  return regex.test(this);
}
--------------------------------------------------
String.prototype.isLetter = function() {
  return /^[A-Za-z]$/.test(this)
}
*/