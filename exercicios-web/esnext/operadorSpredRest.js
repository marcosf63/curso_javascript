// rest (juntar) spread (espalhar)
// usar rest com parametros de funcao

// usar spread com onjetos
const funcionario = { nome: 'Maria', salario: 12349.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar spread com array
const grupoA = ['um', 'dois', 'tres']
const grupoB = [...grupoA, 'quatro', 'cinco']

console.log(grupoB)
