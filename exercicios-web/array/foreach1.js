const aprovados = ['Marcos', 'Samuel', 'Julia', 'Vinicius']

aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach( nome => console.log(nome))
aprovados.forEach( (_,i) => console.log(i))

const imprimirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(imprimirAprovados)
