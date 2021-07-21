function spyOn(func) {
  const stats = {
    callsCount: 0,
    args: [],
    returns: [],
  };

  const newFunc = (...args) => {
    stats.callsCount++;
    args.forEach((arg) => {
      if (!stats.args.includes(arg)) {
        stats.args.push(arg);
      }
    });

    const result = func(...args);
    if (!stats.returns.includes(result)) {
      stats.returns.push(result);
    }

    return result;
  };

  newFunc.callCount = () => stats.callsCount;
  newFunc.wasCalledWith = (a) => stats.args.includes(a);
  newFunc.returned = (a) => stats.returns.includes(a);

  return newFunc;
}

function adder(n1, n2) {
  return n1 + n2;
}
var adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false
