Array.prototype.reduce2 = function(callback, valorInicial) {
  const indiceInical = valorInicial ? 0 : 1
  let acumulador = valorInicial || this[0]
  for (i = indiceInical; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i. this)
  }
  return acumulador
}

console.log([1,2,3,4].reduce2(function(soma, elemento){ return soma + elemento}, 21))
