// pessoa -> endereco de memmora -> objeto

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Marcos'
console.log(pessoa)

//pessoa = { nome: 'Germana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
