'use strict';

let money = 50000,
  addExpenses = "internet, taxi, study",
  deposit = true;

const income = "Frilance",
  mission = 1000000,
  period = 8;

alert("Hello, it's my first homework");
console.log("I'm here too");

console.log(typeof money + ', ' + typeof income + ', ' + typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = Math.round(money / 30);
console.log(budgetDay);


// lesson 3 
money = prompt('Ваш месячный доход?');

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');

deposit = confirm('Есть ли у вас депозит в банке?');

const expensesOne = prompt('Введите обязательную статью расходов?'),
  amountOne = prompt('Во сколько это обойдется?'),
  expensesTwo = prompt('Введите обязательную статью расходов?'),
  amountTwo = prompt('Во сколько это обойдется?');


const budgetMonth = +money - +amountOne - +amountTwo;
console.log(budgetMonth);

const missionMonth = Math.ceil(mission / budgetMonth);

budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (1200 > budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (600 > budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}





