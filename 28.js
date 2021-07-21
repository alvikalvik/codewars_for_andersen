Array.prototype.square = function () {
  return this.map((item) => item ** 2);
};
Array.prototype.cube = function () {
  return this.map((item) => item ** 3);
};
Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN;
  }
  const total = this.reduce((a, b) => +a + +b, 0);
  return total / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((a, b) => +a + +b, 0);
};
Array.prototype.even = function () {
  return this.filter((a) => a % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((a) => a % 2 === 1);
};

const a = [1, 2, 3];

console.log(a.square());
console.log(a.cube());
console.log(a.average());
console.log(a.sum());
console.log(a.even());
console.log(a.odd());
