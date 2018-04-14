// Recurso introduzido no ES2015 (ES6)

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=6] = [1,2,3,4]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[1,2,3], [4,5,6]]
console.log(nota)