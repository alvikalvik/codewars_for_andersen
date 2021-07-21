function prefill(n, v) {    
    if (+n >= 0 && Number.isFinite(+n) && Number.isInteger(+n) && ( typeof n === 'number' || typeof n === 'string' )) {
        if (n === 0) {
            return []
        }

        const arr = []
        arr.length = n;
        arr.fill(v);
        return arr;
    } else {
        throw new TypeError(`${n} is invalid`)
    }  
}