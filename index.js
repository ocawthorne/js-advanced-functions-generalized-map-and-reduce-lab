// Add your functions here
function map(array, callback) {
   let newArray = []
   array.forEach(element => newArray.push(callback(element)))
   return newArray
}

function reduce(array, callback, start=0) {
   let memo = start
   array.forEach(element => start += callback(element, memo))
   return start + memo
}
