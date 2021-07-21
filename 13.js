var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function toDecimal(value, alphabet) {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += alphabet.indexOf(value[value.length - 1 - i]) * (alphabet.length ** i);            
    }    
    return result.toString();
}

function fromDecimal(value, alphabet) {
    const base = alphabet.length;
    if (+value < base) {
        return alphabet[+value];
    } else {
        return fromDecimal(Math.floor(value / base), alphabet) + alphabet[+value % base];
    }
}

// console.log(fromDecimal('10', Alphabet.BINARY));
// console.log(fromDecimal('255', Alphabet.HEXA_DECIMAL));
// console.log(fromDecimal('7', Alphabet.ALPHA_LOWER));

// toDecimal('1010', Alphabet.BINARY);
// toDecimal('ff', Alphabet.HEXA_DECIMAL);
// toDecimal('h', Alphabet.ALPHA_LOWER);

function convert(input, source, target) {
    if (source === Alphabet.DECIMAL) {
        return fromDecimal(input, target)
    }

    if (target === Alphabet.DECIMAL) {
        return toDecimal(input, source)
    }

    return fromDecimal( toDecimal(input, source), target);
}

// console.log( convert( '1010', Alphabet.BINARY, Alphabet.DECIMAL))