const carrinho = [
  '{ "nome": "Borracha", "preco": 3.40}',
  '{ "nome": "Caderno", "preco": 20.99}',
  '{ "nome": "Kit Lapis", "preco": 41.40}',
  '{ "nome": "Caneta", "preco": 3.22}',
]

// retornar um array apenas com o preço
let resultado = carrinho.map(function(e) {
  return JSON.parse(e).preco.toFixed(2).toString().replace('.', ',')
})

console.log(resultado)

