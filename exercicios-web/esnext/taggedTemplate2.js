// tagged template - processar uma template string dentro de uma funcao
function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preco = 99.99
const precoParcela = 40

console.log(real `1 x de ${preco} ou 3 x ${precoParcela}`)
