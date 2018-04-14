Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9,10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) { 
        console.log('Aprovado')
    } else if (nota.entre(4, 6.9)) {
        console.log('Recuperacao')
    } else if (nota.entre(0,3.9)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }

}

imprimirResultado(9)
imprimirResultado(7.5)
imprimirResultado(6.5)
imprimirResultado(2)
imprimirResultado(100)