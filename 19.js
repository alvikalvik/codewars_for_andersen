function cache(func) {
  const cacheArray = [];

  return function (arg1, arg2) {
    let result;
    if (
      !cacheArray.some((item) => {
        if (item.arg1 === arg1 && item.arg2 === arg2) {
          result = item.result;
          return true;
        }
        return false;
      })
    ) {
      result = func(arg1, arg2);
      cacheArray.push({
        arg1,
        arg2,
        result,
      });
    }

    return result;
  };
}
