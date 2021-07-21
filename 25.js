function isSantaClausable(obj) {
  const methodsToCheck = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];

  return methodsToCheck.every((method) => {
    // return method in obj;
    return typeof obj[method] === "function";
  });
}

