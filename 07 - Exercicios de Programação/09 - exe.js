// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(repetira, numeroDeVezes) {
    let retorno = [] ;

    for(let i = 0; i < numeroDeVezes; i++) {
         retorno.push(repetira)
    } 
    return retorno 
} 

console.log(repetir(2,3))