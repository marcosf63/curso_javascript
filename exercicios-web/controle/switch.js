const imprimirResulatado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 7: case 8:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
             console.log('Nota invalida.')
    }
}

imprimirResulatado(10)
imprimirResulatado(7.2)
imprimirResulatado(4.7)
imprimirResulatado(2.4)
imprimirResulatado(-1)
imprimirResulatado(11)
