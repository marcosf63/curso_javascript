let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = NaN))

console.log('Para finalizar...')
console.log(!!('' || null || ' '))
console.log(('' || null || 'opa')) // Retorna o primeiro valor verdadeiro

//O comportamento acima pode ser usado para definir um valor padrão
let nome = ''
console.log(nome || 'Desconhecido')