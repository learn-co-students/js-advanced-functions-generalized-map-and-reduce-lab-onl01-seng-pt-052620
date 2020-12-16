function map(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

function reduce(arr, callback, aggregator) {
    let r = (!!aggregator) ? aggregator : arr[0];
    let i = (!!aggregator) ? 0 : 1

    for(; i < arr.length; i++) {
        r = callback(arr[i], r)
    }
    return r;
}