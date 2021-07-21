// function createMessage() {
//     //...
// }

const infiniteCurry = fn => {
    const next = (...args) => {
      return x => {
        if (!x) {
          return args.reduce((acc, a) => {
            return fn.call(fn, acc, a)
          }, '');
        }
        return next(...args, x);
      };
    };
    return next();
  };
  
  const createMessage = infiniteCurry( (x, y) => (x.trim() + ' ' + y.trim()).trim() );
//   console.log(createMessage(1)(3)(4)(2)())


