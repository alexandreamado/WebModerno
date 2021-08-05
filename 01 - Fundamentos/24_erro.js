function tratarErroElancar(erro){
    throw new Error('...')
    // throw 'mensagem'
}

function imprimirNomeGritado(obj) 
{
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroElancar(e)
    }finally {
        console.log('final')
    }
}

const obj = {name: 'roma'}
imprimirNomeGritado(obj)