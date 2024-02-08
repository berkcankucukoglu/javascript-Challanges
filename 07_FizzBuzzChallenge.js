//Print-Log number from 1-to-100
// For multiples of three print "Fizz" instead of the Number
//For multiples of five print "Buzz"
//For numbers wihich are multiples of both three and five print "FizzBuzz"

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
