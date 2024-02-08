function randomItemFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

console.log(randomItemFromArray([1, 2, 3, 4, 5, 6]));
