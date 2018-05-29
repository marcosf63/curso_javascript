class Pessoa {
  constructor(nome) {
     this.nome = nome
  }

  falar() {
     console.log(`Meu nome eh ${this.nome}`)
  }
}

const p1 = new Pessoa('Marcos')

p1.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome eh ${nome}`)
  }
}

const p2 = criarPessoa('Samuel')
p2.falar()
