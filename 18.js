const add = (function() {
    const factory = function(value) {
        const fn = function(num) {
            return factory(value + num);
        };
        // This is the main hack: 
        // We will return a function that when compared / concatted will call .toString and return a number.
        // Never use this in production code...
        fn.toString = function() {
            return value;
        };
        return fn;
    };
    return factory(0);
})();