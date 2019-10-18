function isIsogram(str) {
    const strArr = str.toLowerCase().split('')
    const strSet = new Set(strArr)
    let isogram = false
    if (strSet.size == strArr.length) {
        isogram = true
    }
    return isogram
}

console.log(isIsogram("abcdefg"))
console.log(isIsogram("Melbourne"))
console.log(isIsogram("goOse"))