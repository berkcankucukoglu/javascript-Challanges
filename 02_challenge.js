// create a number x between 1-100 and number y between 1-50
// create numbers for sum, difference, product, quotient and remainder of x and y and console log everything.

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const diff = Math.abs(x - y);
const prod = x * y;
const quo = Math.floor(x / y);
const rem = x % y;

console.log(sum, diff, prod, quo, rem);
