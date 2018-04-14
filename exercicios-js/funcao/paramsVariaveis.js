function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    
    return soma
}

console.log(soma(2,3,4,5))
console.log(soma())
console.log(1)
console.log(soma(2,3,4,'teste'))