function compose(...functions) {
    return args => functions.reduceRight((arg, fn) => fn(arg), args)
}