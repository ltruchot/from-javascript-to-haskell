import {
  divide, extractAges, last, length, persons, scannedSum, tail, takeAdultAges,
} from './shared';

const compose = (f, g) => a => f(g(a));
const liftA2 = f => (g, h) => a => f(g(a))(h(a));
const divideBy = a => b => divide(b, a);
const getAverage = liftA2(divideBy)(length, last);

const extractAdultAges = compose(takeAdultAges, extractAges);
const getScannedAdultAges = compose(
  tail,
  compose(scannedSum, extractAdultAges),
);
const getAdultsAgesAverage = compose(
  getAverage,
  getScannedAdultAges,
);

const average = getAdultsAgesAverage(persons);

console.log(average); // 35.5 -> oh no, side effect is forbidden !!!
// or
// const reduceRight = (f, init) => arr => arr.reduceRight(f, init);
// const composeX = (...fns) => a => reduceRight((acc, f) => f(acc), a)(fns);
// const getAdultsAgesAverage = composeX(getAverage, tail, scannedSum, takeAdultAges, extractAge);

drop(1) === tail;
compose(tail, scanl) === scan;
