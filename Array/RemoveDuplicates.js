function distinct(a) {
   return Array.from(new Set(a));
}

/* function distinct(a) {
   const set = new Set();
   for(let i = 0; i < a.length; i++) set.add(a[i]);
   return [...set];
}
------------------------------------------------------
function distinct(a) {
   return [...new Set(a)];
 }
------------------------------------------------------
const distinct = a => [...new Set(a)];
------------------------------------------------------
 function distinct(arr) {
   let res = []; 
   
   for(let i = 0; i < arr.length; i++){
     if(!res.includes(arr[i])){
       res.push(arr[i]);
     }
 }
 return res;
 }
------------------------------------------------------
 const distinct = a => a.filter((item, index) => a.indexOf(item) === index);*/