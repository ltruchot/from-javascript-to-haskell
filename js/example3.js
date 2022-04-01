import {
  persons, add, prop, divide, gt,
} from './shared.js';

const length = arr => arr.length;
const map = f => arr => arr.map(f);
const filter = f => arr => arr.filter(f);
const reduce = (f, init) => arr => arr.reduce(f, init);
const last = arr => arr[arr.length - 1];
const scanl = (f, init) => arr => arr.reduce((acc, cur) => [...acc, f(last(acc), cur)], [init]);
const tail = arr => arr.slice(1);
const sum = reduce(add, 0);
const scannedSum = scanl(add, 0);

const extractAges = map(prop('age'));
const takeAdultAges = filter(gt(18));

const adultAgesOnly = takeAdultAges(extractAges(persons));
const adultAgesTotal = tail((scannedSum(adultAgesOnly)));

const average = divide(last(adultAgesTotal), length(adultAgesTotal));
console.log(average); // 35.5 -> oh no, side effect is forbidden !!!
