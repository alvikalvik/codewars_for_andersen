const creaneNumFunc = (num) => {
  return (f) => {
    if (f) {
      return f(num);
    } else {
      return num;
    }
  };
};

const zero = creaneNumFunc(0);
const one = creaneNumFunc(1);
const two = creaneNumFunc(2);
const three = creaneNumFunc(3);
const four = creaneNumFunc(4);
const five = creaneNumFunc(5);
const six = creaneNumFunc(6);
const seven = creaneNumFunc(7);
const eight = creaneNumFunc(8);
const nine = creaneNumFunc(9);

function plus(b) {
  return (a) => a + b;
}
function minus(b) {
  return (a) => a - b;
}
function times(b) {
  return (a) => a * b;
}
function dividedBy(b) {
  return (a) => Math.floor(a / b);
}
