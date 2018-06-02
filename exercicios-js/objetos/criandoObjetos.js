// Usando a notacao literal

const obj1 = {}
console.log(obj1)

// usando objet em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Cadeira', 300, 0.1)
console.log(p1.nome)
console.log(p1.getPrecoComDesconto())


// Funcao factory
 
function criarFuncionario(nome, salarioBase, faltas) {
   return {
     nome,
     salarioBase,
     faltas,
     getSalario () {
       return (salarioBase / 30) * (30 - faltas)
     }
   }
}
	    
const f1 = criarFuncionario('Marcos', '50000', 3)
console.log(f1.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info":"Eu sou um objeto!"}')
console.log(fromJSON.info)

