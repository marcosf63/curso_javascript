function rand([min = 0, max = 1000]) {
   if (min > max) [min, max] = [max, min]
   const valor = Math.random() * (max - min) + min
   return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([995])) // Passando só o primeiro elemento do array
console.log(rand([, 10])) // Passando somente o segundo elemento
console.log(rand([])) // Passando um array vazio assume os valoras padrão
//console.log(rand()) // dá erro