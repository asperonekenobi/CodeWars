function count(string) {
   let obj = {};
      /* Каждая буква -> Элемент массива -> Ключ(свойство) в объекте */
   string.split('').forEach(item => {
      obj[item] === undefined ? obj[item] = 1 : obj[item] = obj[item] + 1;// Если св-ва(ключа) нет то значению присв. 1, если есть то значение+1.
   });

   return obj;
}

/* 
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}
----------------------------------------------------------

*/