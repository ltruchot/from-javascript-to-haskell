import { persons } from './shared.js';

const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const gt = a => b => b > a;
const prop = (k) => (o) => o[k];

const adultAgesOnly = persons
  .map(prop('age'))
  .filter(gt(18));

const adultAgesTotal = adultAgesOnly.reduce(add, 0);

const average = divide(adultAgesTotal, adultAgesOnly.length);
console.log(average); // 35.5
