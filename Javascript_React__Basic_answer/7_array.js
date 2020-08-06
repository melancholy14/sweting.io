/**
 * Please, print the array A's elements in reverse order with a single line of space-separated numbers
 */

// Complete the function
function reverseArray(array){
  try {
    const reversed = array.reverse();

    console.log(reversed.join(' '));
  } catch (error) {
    console.log(error);
  }
}

reverseArray([1,2,3,4]); // 4 3 2 1
reverseArray(['a', 'b', 'c', 'd', 'e']) // e d c b a