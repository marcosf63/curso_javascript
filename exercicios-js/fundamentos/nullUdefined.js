let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

//console.log(valor.toString()) // Vai dá erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(produto)
