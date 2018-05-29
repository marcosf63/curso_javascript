// Closure e escopo criado quando uma funcao eh declarada
// Esse escopo vai permitir que a funcao acesse e manipule as variaveis externas a funcao

// Contecto Lexico em acao!

const x = 'Global'

function fora() {
  const x = 'Local'

  function dentro() {
    return x
  }

  return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())
