function map(src, arr) {
    let newArray = []
    for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    newArray.push(arr(theElement))
    }
    return newArray;
} 

function reduce(src, cb, st_pt) {
    let arr = (!!st_pt) ? st_pt: src[0]
    let i = (!!st_pt) ? 0 : 1
    for (; i < src.length; i++) {
        arr = cb(src[i], arr)
    }
    return arr;
}
