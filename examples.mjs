const persons = [
  { name: 'loic', age: 37 },
  { name: 'sonemany', age: 34 },
  { name: 'swann', age: 2 },
];

/*
const adultAgesOnly = persons
  .map((person) => person.age)
  .filter((age) => age > 18);

const adultAgesTotal = adultAgesOnly.reduce((total, age) => total + age, 0);

const average = adultAgesTotal / adultAgesOnly.length;

console.log(average); // 35.5
*/

// If everything is function...
const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const gt = a => b => b > a;
const prop = (k) => (o) => o[k];
/*
const adultAgesOnly = persons
  .map(prop('age'))
  .filter(gt(18));

const adultAgesTotal = adultAgesOnly.reduce(add, 0);

const average = divide(adultAgesTotal, adultAgesOnly.length);
console.log(average);
*/

const length = arr => arr.length;
const map = f => arr => arr.map(f);
const filter = f => arr => arr.filter(f);
const reduce = (f, init) => arr => arr.reduce(f, init);
const last = arr => arr[arr.length - 1];
const scanl = (f, init) => arr => arr.reduce((acc, cur) => [...acc, f(last(acc), cur)], [init]);
const drop = nb => arr => arr.slice(nb);
const sum = reduce(add, 0);
const scannedSum = scanl(add, 0);
const dropFirst = drop(1);

const extractAges = map(prop('age'));
const takeAdultAges = filter(gt(18));
/*
const adultAgesOnly = takeAdultAges(extractAges(persons));
const adultAgesTotal = dropFirst((scannedSum(adultAgesOnly)));

const average = divide(last(adultAgesTotal), length(adultAgesTotal));
console.log(average); // 35.5 -> oh no, side effect is forbidden !!!
*/

const compose = (f, g) => a => f(g(a));
const liftA2 = f => (g, h) => a => f(g(a))(h(a));
const divideBy = a => b => divide(b, a);
const getAverage = liftA2(divideBy)(length, last);

const extractAdultAges = compose(takeAdultAges, extractAges);
const getScannedAdultAges = compose(dropFirst, compose(scannedSum, extractAdultAges));
const getAdultsAgesAverage = compose(getAverage, getScannedAdultAges);

const average = getAdultsAgesAverage(persons);

console.log(average); // 35.5 -> oh no, side effect is forbidden !!!
// or
// const reduceRight = (f, init) => arr => arr.reduceRight(f, init);
// const composeX = (...fns) => a => reduceRight((acc, f) => f(acc), a)(fns);
// const getAdultsAgesAverage = composeX(getAverage, dropFirst, scannedSum, takeAdultAges, extractAge);

import { promises as fsp} from "fs";

fsp.readFile("./data/persons.json")
  .then(JSON.parse)
  .then(getAdultsAgesAverage)
  .then(console.log)
