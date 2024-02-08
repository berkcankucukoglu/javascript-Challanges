function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}

const arrowGetCelsius = (f) => ((f - 32) * 5) / 9;

console.log(getCelsius(60));
console.log(arrowGetCelsius(60));

console.log(`The temp is ${Math.floor(arrowGetCelsius(60))}\xB0C outside.`);

// Create a arrow function that takes in an Array, and returns thje min and max values inside that array
// console.log(minMax([1,2,3,4,5]));
// output -> {min: 1, max: 5}

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([-30, -12, 1, 2, 3, 4, 5, 6, 7, 8, 30]));

//IIFE
//((a, b)=> { return null})(a, b)
//on page load, "The area of a rectangle with a length of 10 and a width of 5 is 50."
((len, wid) => {
  const area = len * wid;
  const output = `The area of the rectangle with a length of ${len} and width of ${wid} is ${area}.`;
  console.log(output);
})(10, 5);
