// let mapper = function map(array){
//   return array.map(number => number * -1)
// }

// let noChange = function map(array){
//   return array.map(number => number)
// }

// let doubleNumber = function map(array){
//   return array.map(number => number * 2)
// }

// let multiplyNumber = function map(array){
//   return array.map(number => number * number)
// }

function reduce(source, startingPoint=0){
  let total = startingPoint
  for(let i=0; i< source.length; i++){
      total = total + source[i]
  }
  return total
}


function reduce(array, callback, startingPoint){
  let total
  if(!!startingPoint){ 
   total = startingPoint
  } else {
    total = array[0]
  }

  let int 
  if(!!startingPoint){ 
    int = 0
   } else {
     int = 1
   }

for (;int < array.length; int++) {
  total = callback(array[int], total)
}
return total
}
// let array = [1, 2, 3]
// starting_point = 0 
// callback + 



function map(array, callback){
let arr = []
  for (let index = 0; index < array.length; index++) {
    arr.push(callback(array[index]))
  }  
  return arr
}
