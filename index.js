// Add your functions here
function map(sourceArray, callBack) {
    let r = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      let theElement = sourceArray[i]
      r.push(callBack(theElement))
    }
  
    return r;
}
  
function reduce(sourceArray, callBack, startingPoint) {
    let r = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      r = callBack(sourceArray[i], r)
    }
  
    return r;
  }