const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj1, obj2)

const obj3 = {}

nomeAttr = 'nota'
valorAttr =  7.5

obj3[nomeAttr] = valorAttr

console.log(obj3)

obj4 = {[nomeAttr]: valorAttr}

console.log(obj4)

const obj5 = {
   funcao1 : function() {
     //...
   },
   funcao2() {
     //... ECMASript 2015
   }
}

console.log(obj5)
