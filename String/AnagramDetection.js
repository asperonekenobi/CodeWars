function sortString(str) {
   return str.toLowerCase().split('').sort().join('');
}

var isAnagram = function (test, original) {
   return test.trim() === original.trim() ? false : sortString(test) === sortString(original);
}

/* 
var isAnagram = function(test, original) {
    if(test.length !== original.length) { return false }
    return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
}
-----------------------------------------------
// Вспомогательная функция, которая создаёт объект для хранения данных
const buildCharObject = str => {
  const charObj = {}
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    // Если объект уже содержит пару ключ-значение равную значению в цикле,
    // увеличиваем значение на 1, в противном случае добавляем букву в качестве ключа
    // и 1 в качестве значения
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}
// Главная функция
const anagram = (strA, strB) => {
  // Создаём объект для хранения strA
  const aCharObject = buildCharObject(strA)
  // Создаём объект для хранения strB
  const bCharObject = buildCharObject(strB)
  // Сравниваем количество ключей в обоих объектах 
  // (анаграммы должны иметь одинаковое количество букв)
  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false
  }
  // Если оба объекта имеют одинаковое количество ключей, мы можем быть уверены,
  // что обе строки имеют одинаковое количество символов. Теперь мы можем сравнить
  // оба объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве
  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false
    }
  }
  // Если проверка успешна, строки являются анаграммами — возвращаем true
  return true
}
Обратите внимание на использование Object.keys(). Этот метод возвращает массив, содержащий имена или ключи в том же порядке, в котором они встречаются в объекте. В этом случае массив будет выглядеть так:

['f', 'i', 'n', 'd', 'e', 'r']
Это удобный способ получить свойства объекта без выполнения громоздкого цикла. В этой задаче вы можете использовать этот способ вместе со свойством .length, чтобы проверить, имеют ли обе строки одинаковое количество символов, что является важной особенностью анаграмм.
*/