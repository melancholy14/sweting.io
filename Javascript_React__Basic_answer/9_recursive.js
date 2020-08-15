/**
 * Please, write a function to calculate factorial taking a positive integer.
 * Note: if you fail to use recursion, you will get a score of 0
 */

// Complete this function using recursion
function factorial(n) {
  if (n < 1) {
    return 0;
} else if (n === 1) {
    return 1;
} else {
    return n * factorial(n - 1);
}
}

console.log(factorial(3))  // 6
console.log(factorial(6))  // 720