//Add 0 and 6 into arr -> [6,5,4,3,2,1,0]
const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr);

//combine arr1 and arr2 -> [1,2,3,4,5,6,7,8,9,10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let x = arr1.slice(0, 4).concat(arr2);
console.log(x);

let y = [...arr1, ...arr2];
y.splice(4, 1);
console.log(y);
