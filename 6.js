// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    const tArray = []
    const fArray = []

    items.forEach(item => {
        if (pred(item)) {
            tArray.push(item)
        } else {
            fArray.push(item)
        }
    })

    items.length = 0;

    items.push(...fArray, ...tArray)

    return fArray.length
}