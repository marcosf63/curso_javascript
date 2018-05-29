// Factory simples
function criarProduto(nome, preco) {
  return {
    nome: nome,	
    preco: preco,
    desconto: 10
  }
}

console.log(criarProduto('Site', 100.00))

