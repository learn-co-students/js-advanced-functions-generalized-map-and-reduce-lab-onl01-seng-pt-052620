function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        newArray.push(callback(element))
    }
    return newArray;
}
