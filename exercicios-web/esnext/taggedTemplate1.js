// tagged template - processar uma template string dentro de uma funcao
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Marcos'
const situacao = 'aprovado'

console.log(tag `${aluno} esta ${situacao}`)

