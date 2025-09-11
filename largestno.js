const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findLargest(a, b, c) {
  let largest;
  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }
  console.log(`The largest number is: ${largest}`);
}

rl.question("Enter first number: ", (input1) => {
  rl.question("Enter second number: ", (input2) => {
    rl.question("Enter third number: ", (input3) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      const num3 = parseFloat(input3);
      findLargest(num1, num2, num3);
      rl.close();
    });
  });
});