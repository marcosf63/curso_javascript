//let e const
{
  var a = 1
  let b = 2
  console.log(b)
}
console.log(a)

// Template string
const produto = 'ipad'
console.log(`${produto} eh caro!`)

// Destructuring
const [l, e, ...tras] = 'Marcos'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade, nome } = { idade: 24, nome: 'Marcos' }
console.log(idade, nome)
