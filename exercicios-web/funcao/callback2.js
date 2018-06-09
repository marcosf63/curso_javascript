const notas = [7.7, 6.6, 4.5, 5.2, 7.0, 8.3, 9.0]

// Sem callback

const notasBaixas1 = []

for (i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter(function(nota){
  return nota < 7
})

console.log(notasBaixas2)

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)

