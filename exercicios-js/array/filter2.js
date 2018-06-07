Array.prototype.filter2 = function(callback) {
   const novoArray = []
   for (let i = 0; i < this.length; i++) {
     if (callback(this[i], i, this)) {
       novoArray.push(this[i])
     }
   }
   return novoArray
}

const produtos = [
   { nome: 'Notebook', preco: 4998, fragil: true},
   { nome: 'iPad', preco: 2458, fragil: true},
   { nome: 'Copo de Vidro', preco: 13.99, fragil: true},
   { nome: 'Copo de Plástico', preco: 12.88, fragil: false}
]

console.log(produtos.filter2(function(p){
  return false
}))

const fragil = p => p.fragil
const maior500 = p => p.preco > 500

console.log(produtos.filter2(fragil).filter2(maior500))
