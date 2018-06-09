const pessoa = {
   nome: 'Rebeca',
   idade: 2,
   peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
  console.log(`${e[0]}: ${e[1]}`)
})


Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2016'
})

pessoa.dataDeNascimento = '01/01/2015'
console.log(pessoa.dataDeNascimento)

// Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
