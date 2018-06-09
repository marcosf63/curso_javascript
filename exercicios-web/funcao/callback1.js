const fabricantes = ["Mercedes", "Audio", "BMW"]

function imprimir(nome, indice) {
   console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
  console.log(fabricante)
})
