// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borrcha escolar'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {nome: 'Marcos', idade: 55}
Object.seal(pessoa)

pessoa.sobrenome = 'Oliveira'
delete pessoa.nome
pessoa.idade = 29

console.log('Selado: ', Object.isSealed(pessoa))
console.log(pessoa)

// Object.freeze = selado + valores constantes


