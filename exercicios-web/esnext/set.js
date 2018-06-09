// nao aceita repeticao e nao eh indexado

const times = new Set()

times.add('Ceara')
times.add('Guarani').add('Icasa')
times.add('Ceara')

console.log(times)
console.log(times.size)
console.log(times.has('ceara'))
console.log(times.has('Ceara'))

const nomes = ['Marcos', 'Julia', 'Samuel']
const pessoas = new Set(nomes)

console.log(pessoas)
