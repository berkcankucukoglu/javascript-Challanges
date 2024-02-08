//challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

//Take people array and create an array called youngPeople that stores object with only name and email properties of the all the people that are 25 and under.
//name property should have their first and last name.

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

//challenge 2
//Add all of the positive numbers in the array and return a sum.
const numbers = [2, -30, 50, 20, -12, -9, 7];

const sum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);

//challenge 3
//Create a new array called capitalizedWords with the words from the "words" array. First letter of each word capitalized.

const words = ['coder', 'programmer', 'developer'];

//method 1
let capitalizedWords = [];
words.forEach((word) => {
  capitalizedWords.push(word[0].toUpperCase() + word.substring(1));
});
console.log(capitalizedWords);

//method 2
const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.substring(1); //or Slice(1), Slice(1, word.length)
});
console.log(cWords);
