// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {};

Object.prototype.hash = function (string) {
  let obj = this;
  string.split(".").forEach(function (prop) {
    try {
      obj = obj[prop];
    } catch (e) {
      obj = undefined;
    }
  });
  return obj;
};

Object.prototype.hash = function (string) {
  const arr = string.split(".");
  return arr.reduce(function (accumulator, curent) {
    if (accumulator) {
      return accumulator[curent];
    } else {
      return accumulator;
    }
  }, this);
};
