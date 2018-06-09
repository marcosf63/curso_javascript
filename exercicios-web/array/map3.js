Array.prototype.map2 = function(callback) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this))
  }
  return novoArray
}


const carrinho = [
  '{ "nome": "Borracha", "preco": 3.40}',
  '{ "nome": "Caderno", "preco": 20.99}',
  '{ "nome": "Kit Lapis", "preco": 41.40}',
  '{ "nome": "Caneta", "preco": 3.22}',
]

// retornar um array apenas com o preço
let resultado = carrinho.map2(function(e) {
  return JSON.parse(e).preco.toFixed(2).toString().replace('.', ',')
})
//mm
console.log(resultado)

