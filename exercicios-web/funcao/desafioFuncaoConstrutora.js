function Pessoa (nome) {

  // Atributo privado
  this.nome = nome

  // Metodo publico 
  this.falar = function() {
    console.log(`Meu nome eh ${this.nome}`)
  }


}

const p1 = new Pessoa('Marcos')
p1.falar()

