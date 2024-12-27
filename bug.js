function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  } else {
    return x + 1; // Handle positive numbers
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(5));   // Output: 6
console.log(foo(NaN)); //Output:NaN. This is the bug, it should ideally throw an error or return a specific value indicating that NaN was input