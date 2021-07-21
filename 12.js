function sequence(n, pattern) {    
    let arr = []
    arr.length = n
    arr.fill(undefined)

    if (typeof pattern === 'function') {
        arr = arr.map( pattern )         

        // for (let i = 0; i < arr.length; i++) {
        //     arr[i] = pattern(arr[i], i)
        // }
         
    } else {
        arr.fill(pattern)
    }

    return arr
  }

  console.log(sequence( 5, (x, idx) => idx%2 ))