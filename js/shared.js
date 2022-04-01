export const persons = [
  { name: 'loic', age: 37 },
  { name: 'sonemany', age: 34 },
  { name: 'swann', age: 2 },
];

export const add = (a, b) => a + b;
export const divide = (a, b) => a / b;
export const gt = a => b => b > a;
export const prop = (k) => (o) => o[k];

export const length = arr => arr.length;
export const map = f => arr => arr.map(f);
export const filter = f => arr => arr.filter(f);
export const reduce = (f, init) => arr => arr.reduce(f, init);
export const last = arr => arr[arr.length - 1];
export const scanl = (f, init) => arr => arr
  .reduce((acc, cur) => [...acc, f(last(acc), cur)], [init]);
export const tail = arr => arr.slice(1);
export const sum = reduce(add, 0);
export const scannedSum = scanl(add, 0);

export const extractAges = map(prop('age'));
export const takeAdultAges = filter(gt(18));

export const adultAgesOnly = takeAdultAges(extractAges(persons));
export const adultAgesTotal = tail((scannedSum(adultAgesOnly)));

export const compose = (f, g) => a => f(g(a));
export const liftA2 = f => (g, h) => a => f(g(a))(h(a));
export const divideBy = a => b => divide(b, a);
export const getAverage = liftA2(divideBy)(length, last);

export const extractAdultAges = compose(takeAdultAges, extractAges);
export const getScannedAdultAges = compose(tail, compose(scannedSum, extractAdultAges));
export const getAdultsAgesAverage = compose(getAverage, getScannedAdultAges);
