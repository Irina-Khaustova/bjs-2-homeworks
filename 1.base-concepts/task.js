'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let x1;
  // код для задачи №1 писать здесь
  let d = (b**2) - (4*a*c);
  //if (d < 0) {
  //}
  if (d === 0) {
    x = -b/(2*a);
    arr.push(x);
  }
  else if (d > 0){
  	x = (-b + Math.sqrt(d))/(2*a);
  	x1 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x, x1);
  };
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
