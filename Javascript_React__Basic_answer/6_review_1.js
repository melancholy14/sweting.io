/**
 * Given a string S, of length N that is indexed from 0 to N - 1, print it's even-indexed characters as 2 space-separated strings on a single line.
 * Note: 0 is considered as an even index
 */

// Complete the function
function separateString(str) {
  if (!str || typeof str !== 'string') {
    return;
  }

  const evens = [];
  const odds = [];
  for(let i = 0; i < str.length ; i++) {
    if (i % 2 === 0) {
      evens.push(str[i]);
    } else {
      odds.push(str[i]);
    }
  }

  console.log(evens.join(''), odds.join(''));
}

separateString('Hacker'); // Hce akr
separateString('Rank');   // Rn ak
