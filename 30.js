function digital_root(n) {
  const sum = n
    .toString()
    .split("")
    .reduce((a, b) => +a + +b, 0);

  if (sum < 10) {
    return sum;
  }

  return digital_root(sum);
}

console.log(digital_root(7));
console.log(digital_root(12));
console.log(digital_root(123));
console.log(digital_root(124));
console.log(digital_root(1255));
