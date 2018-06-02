class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
     this.nome = nome
     this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes = mes, ano = ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }
  adicionaLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }
  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Conta de Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.adicionaLancamentos(salario, contaLuz)
console.log(contas.sumario())


