const persons = [
  { name: 'loic', age: 37 },
  { name: 'sonemany', age: 34 },
  { name: 'swann', age: 2 },
];

const adultAgesOnly = persons
  .map((person) => person.age)
  .filter((age) => age > 18);

const adultAgesTotal = adultAgesOnly.reduce((total, age) => total + age, 0);

const average = adultAgesTotal / adultAgesOnly.length;

console.log(average); // 35.5
