/**
 * Please, decide given number,`n`, is weird or not.
 * - If `n` is odd, print WEIRD
 * - If `n` is even and in the inclusive range of 2 to 5, print NOT WEIRD
 * - If `n` is even and in the inclusive range of 6 to 20, print WEIRD
 * - If `n` is even and greater than 20, print NOT WEIRD
 */

// Complete the function below
function WeirdOrNot(n) {
  if ((n % 2 === 1) || (n >= 6 && n <= 20)) {
    console.log('WEIRD');
} else {
    console.log('NOT WEIRD');
}
}

WeirdOrNot(3);  // WEIRD

WeirdOrNot(24); // NOT WEIRD

