// Formas de declarar funcoes em java script

console.log(soma(3,2)) // a funcao soma pode ser chamada antes de declarada

// function declaration
function soma(x, y) { return x + y }

// function expression
const sub = function(x, y) { return x - y }
console.log(sub(4,1)) // so pode chamada depois de declarada


// named function expression (usada para debug)
const mult = function mult(x, y) { return x * y }
console.log(mult(5,6)) // tambem so pode se chamada depois de declarada

