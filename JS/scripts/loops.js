// Display odd numbers
for (var i = 1; i < 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Simpler solution
// for (var i = 1; i < 20; i += 2) {
//   console.log(i);
// }

console.log("===================================");

// Decreasing multiples of 3
for (var i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

console.log("===================================");

// Print the given sequence
for (var i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}

console.log("===================================");

// Sigma
var sum = 0;

for (var i = 1; i <= 100; i++) {
  sum += i;
}

console.log("The sum from 1 to 100 is " + sum);

console.log("===================================");

// Factorial
var product = 1;

for (var i = 1; i <= 12; i++) {
  product *= i;
}

console.log("The factorial of 12 is " + product);
