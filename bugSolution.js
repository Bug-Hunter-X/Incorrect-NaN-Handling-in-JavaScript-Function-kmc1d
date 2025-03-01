function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  } else if (isNaN(x)){
    throw new Error('Invalid input: NaN'); // Handle NaN explicitly
  } else {
    return x + 1; // Handle positive numbers
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(5));   // Output: 6
//console.log(foo(NaN)); // Throws an error: 'Invalid input: NaN' 