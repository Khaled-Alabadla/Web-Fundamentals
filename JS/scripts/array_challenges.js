/* 
Create a function that takes an array as input. Whenever the function encounters the value "food" in the array,
it should log "yummy" to the console. If "food" is not found in the array, the function should log "I'm hungry" once.
*/
function alwaysHungry(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      count++;
    }
  }
  if (!count) {
    console.log("I'm hungry")
  }
}

alwaysHungry(['food', '1', 'abc', 'hungry', 'food'])

/*
Given an array and a cutoff value, create a new array that includes only the values greater than the cutoff.
*/
function highPass(arr, cutoff) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] > cutoff) {
      filteredArr.push(arr[i])
    }
  }

  return filteredArr;
}

console.log(highPass([3, 5, 6, 8, -6], 5))

/*
When provided with an array of numbers, determine how many numbers in the array are greater than the average of the numbers in the array.
*/
function betterThanAverage(arr) {
  let sum = 0;
  let avg = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  avg = sum / arr.length;

  return arr.filter((el) => {
    return el > avg
  });
}
let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Fibonacci Array
function fibonacciArray(n) {
  let fibArr = [0, 1];
  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
  }
  return fibArr;
}

console.log(fibonacciArray(10))