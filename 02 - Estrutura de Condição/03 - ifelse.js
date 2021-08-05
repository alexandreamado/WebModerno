const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovada')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa') //cuidado