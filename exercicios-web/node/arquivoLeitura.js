const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// soncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// sincrono

fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

// lendo json de uma forma mais simples
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
   console.log('Conteudo da pasta...')
   console.log(arquivos)
})

