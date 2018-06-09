// arrow functions
const soma = (a, b) => a + b
console.log(soma(2, 7))


// Arrow function (this)
const lexico1 = () => console.log(exports === this)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default

function log(texto = 'Node') {
  console.log(texto)
}

log()
log('Sou mais forte')
log(undefined)
log(null)

// operador rest
function total(...numeros) {
  return numeros
}

console.log(total(2,3,4,5,6))
