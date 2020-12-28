// Add your functions here
function map(sourceArray, funk) {
    const newArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArray[i] = funk(sourceArray[i])
    }
    return newArray;
}


function reduce(sourceArray, funk, startingPoint) {
        let addend;
        if (startingPoint)
        {
            addend = startingPoint + sourceArray[0]
        }
        else
        {
            addend = sourceArray[0]
        }
        for(let i = 1; i < sourceArray.length; i++)
        {
            addend = funk(sourceArray[i], addend)
        }
        return addend;
}
