// Add your functions here

function map(sourceArray, callbackFn) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(callbackFn(sourceArray[i]))
  }
  return newArray;
}

function reduce(sourceArray, callbackFn, startingValue) {
  let reducedValue = !!startingValue ? startingValue : sourceArray[0]
  let iteratingInteger = !!startingValue ? 0 : 1

  for (; iteratingInteger < sourceArray.length; iteratingInteger++) {
    reducedValue = callbackFn(sourceArray[iteratingInteger], reducedValue)
  }

  return reducedValue;
}