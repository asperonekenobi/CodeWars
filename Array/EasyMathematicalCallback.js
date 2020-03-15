function processArray(arr, callback) {
   return arr.map(callback);
}

/* 
const processArray = (arr, callback) => arr.map(el => callback(el));
---------------------------------------------------------------------
function processArray(arr, callback) {
    var newArr = [];
    for(i=0; i<arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
}
*/