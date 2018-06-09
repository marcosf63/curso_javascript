// Funcao em JS eh First Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// armazenar em uma variavel
const func2 = function() {}

// armazenar em um array
const array = [function(a,b){return a+b}, fun1, func2]
console.log(array[0](2,4))

// armazenar uma funcao em atributos de objetos
const obj = {}
obj.falar = function() { return 'opa'}
console.log(obj.falar())

// passar uma funcao coo parametro
function run(fun) {
    fun()
}

run(function(){console.log('Executando...')})

// Uma funcao pode retornar/conter uma funcao

function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
