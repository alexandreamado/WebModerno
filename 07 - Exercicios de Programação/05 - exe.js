// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 

function retorno(valoA, valoB) {
    if (valoA > valoB) {
        console.log(`${valoA} é maior que ${valoB}`)
    } else if (valoA < valoB) {
        console.log(`${valoA} é menor que ${valoB}`)
    } else if (valoB === valoA) {
        console.log('numeros iguais')
    } else {
        console.log(false)
    }
} 

retorno(10,5)
retorno(10,50)
retorno(50,50)
retorno(50,'50')