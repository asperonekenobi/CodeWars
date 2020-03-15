function findDup( arr ){
  
   var newArr = [];
  
    for(var i = 0; i < arr.length; i++) 
      if (!newArr[arr[i]])
        newArr[arr[i]] = true;
      else return arr[i];
  
  }

  /* 
  function findDup(arr){
  return arr.reduce(function(acc, el, indEl){
    return arr.indexOf(el) == i ? acc : el;
  }, null);
}
---------------------------------------------
function findDup( arr ){
  arr.sort();
  
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] == arr[i+1]) {
      return arr[i]
    }
  }
}
  */