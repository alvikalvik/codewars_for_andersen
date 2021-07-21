function array(arr){
    const splittedArr = arr.split(',')
    if (splittedArr.length <= 2) {
        return null
    }
    
    return splittedArr.slice(1, -1).join(' ')
}
    