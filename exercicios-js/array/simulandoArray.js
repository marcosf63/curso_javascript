const quaseArray = {0: 'Marcos', 1: 'Julia', 2: 'Samuel'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this)},
  enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray.toString())
