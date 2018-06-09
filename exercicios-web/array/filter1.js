const produtos = [
   { nome: 'Notebook', preco: 4998, fragil: true},
   { nome: 'iPad', preco: 2458, fragil: true},
   { nome: 'Copo de Vidro', preco: 13.99, fragil: true},
   { nome: 'Copo de Plástico', preco: 12.88, fragil: false}
]

console.log(produtos.filter(function(p){
  return false
}))

const fragil = p => p.fragil
const maior500 = p => p.preco > 500

console.log(produtos.filter(fragil).filter(maior500))
