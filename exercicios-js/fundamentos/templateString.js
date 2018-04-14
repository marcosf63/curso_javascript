const nome = 'Julia'
const concatenacao = 'Ola ' + nome + '!'
const template = `
    Olá
    ${nome}!` 

console.log(concatenacao,template)

// Pode se usar dentro das templates strings expressões
// como por exemplo, uma expressão matemática

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei ${up('cuidado')}!`)