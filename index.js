// Add your functions here


function map(source, cb) {
  let x = []

  for (let i = 0; i < source.length; i++) {
    let theElement = source[i]
    x.push(cb(theElement))
  }
  return x;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}