const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstapen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode tanto adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // remove o massa
console.log(pilotos)

console.log(pilotos.slice(2)) // slice gera um novo array
console.log(pilotos.slice(1,4))
