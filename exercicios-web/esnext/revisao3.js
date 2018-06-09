// ES8 - Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome = 'Marcos'
const pessoa = {
  nome,
  ola() {
   console.log(`Ola ${this.nome}`)
  }
}

pessoa.ola()


// Classe
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au'
  }
}

const c = new Cachorro()
console.log(c.falar())
