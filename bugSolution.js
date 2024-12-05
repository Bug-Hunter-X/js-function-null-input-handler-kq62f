function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately.  Options include:
    // 1. Throw an error:
    // throw new Error("Inputs cannot be null");
    // 2. Return null:
    // return null;
    // 3. Use a default value:
    a = a === null ? 0 : a;
    b = b === null ? 0 : b;
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); //Output: 0