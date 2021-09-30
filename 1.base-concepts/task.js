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
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } 
  else if (isNaN(contribution)) {
  	return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if (isNaN(amount)) {
  	return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };
  let summCredit = +amount - +contribution;
  let date1 = date;
  let date2 = Date.now();
  let loanDuration = Math.floor((date1 - date2)/(1000*60*60*24*30));
  totalAmount = +((loanDuration*summCredit*(1/12*(+percent)/100 + (1/12*(+percent)/100)/(((1 + (1/12*(+percent)/100))**loanDuration) - 1))).toFixed(2));
  return totalAmount;
}

