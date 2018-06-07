const fs = require('fs')

const produto = {
  nome: 'Notebool',
  preco: 4999
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (erro) => {
  console.log(erro || 'arquivo salvo')
})
