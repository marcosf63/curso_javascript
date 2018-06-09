// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
   const saudacao = 'Faala' // contexto léxico 2
   return saudacao 
}

// Objetos de grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    pedo: 90,
    endereco: {
        logradouro: 'Rua 1',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)