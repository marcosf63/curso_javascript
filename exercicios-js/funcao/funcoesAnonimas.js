const soma = function(a, b) {
  return a + b
}

const imprimeResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimeResultado(2,3)
imprimeResultado(2,3, soma)
imprimeResultado(3, 2, function(x, y) {
   return x - y
})
imprimeResultado(3, 2, (x, y) => x * y)

const pessoa = {
   falar: function() {
     console.log('Opa')
   }
}

pessoa.falar()
