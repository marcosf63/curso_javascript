function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4567,
  desc: 0.15,
  getPreco
}

global.preco = 100
global.desc = 0.15
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 5000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.15, 'BTC'))
console.log(getPreco.apply(global, [0.17, 'ETH']))
