function countWords(str) { 
    const normalizedStr = str.trim().replace(/\s+/g, " ");

    if (!normalizedStr.length) {
        return 0
    }  
     
    return normalizedStr.split(' ').length
}

