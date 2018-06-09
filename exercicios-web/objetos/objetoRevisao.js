// Colecao dinamica de pares chave-valor

const produto = new Object()

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
   modelo: 'A4',
   preco: 90000,
   proprietario: {
      nome: 'Marcos',
      idade: 56,
      endereco: {
        logradouro: 'Rua 1',
	numero: 123
      }
   },
   condutores: [{
     nome: 'Samuel',
     idade: 18
   },
   {
     nome: 'Julia',
     idade: 25
   }],
   calcularValorSeguro: function() {
     //...
   }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log('**************************')
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

	    
