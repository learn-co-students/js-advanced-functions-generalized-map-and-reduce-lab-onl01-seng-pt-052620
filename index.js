// Add your functions here
function map(arr, func) {
  let newArray = []
  for (let i = 0; i < arr.length; i++ ) {
    newArray.push(func(arr[i]))
  } 
  return newArray
}

function reduce(arr, func, startValue) {
  let counter;
  let newTotal;
  if(!!startValue) {
    counter = 0
    newTotal = startValue
  } else {
    counter = 1
    newTotal = arr[0]
  }
    
  for (counter; counter < arr.length; counter++ ) {
    newTotal = (func(arr[counter], newTotal))
  } 
  return newTotal
}
