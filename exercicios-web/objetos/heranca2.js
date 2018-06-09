// Cadeia de prototipo
Object.prototype.att0 = 0
const avo = { att1: 'A'}
const pai = { __proto__: avo, att2: 'B', att3: 3}
const filho = {__proto__: pai, att3: 'C' }

console.log(filho.att0, filho.att1, filho.att2, filho.att3)

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
       this.velAtual += delta
    } else {
       this.velAtual = this.velMax
    }
  },
  status() { 
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 340 // shadowing
}

const volvo = {
  modelo: 'C40',
  status() { return `${this.modelo}: ${super.status()}` }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())


