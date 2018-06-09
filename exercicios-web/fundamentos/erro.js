function tratarErro(erro) {
    //throw new Error("Deu pau!!!!")
    //throw 10
    //throw false 
    //throw 'message'
    throw {
        nome: erro.name,
        message: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj)  {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErro(e)
    } finally {
        console.log('Final')
    }
  
}

const obj = {nome: 'Marcos'}
imprimirNomeGritado(obj)