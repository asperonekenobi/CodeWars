function century(year) {
   return Math.ceil(year / 100);
}

/* 
function century(year) {
  return (year + 99) / 100 | 0;
}
------------------------------------------
const centry(year) = year => Math.ceil(year/100);
------------------------------------------
function century(year) {
  if (year <= 100){
    return 1;
  }

  let cen = parseInt(year / 100);
  let rem = year % 100;

  return rem === 0 ? cen : cen + 1;
}
*/