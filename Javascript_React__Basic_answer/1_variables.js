/*
  Please, complete the 'plus' function to add parameters to other variables defined inside the function.
**/

function plus(a, b) {
  const i = 10;
  const str = ' is what this function got!!';

  // Print the sum of numbers on a new line
  const total = i + a;
  console.log(total);

  // Concatenate and print the string on a new line
  // Note, 'b' should be placed before 'str'
  const totalString = b + str;
  console.log(totalString);
}

plus(0, 'Hello');

plus(10, 'Javascript');