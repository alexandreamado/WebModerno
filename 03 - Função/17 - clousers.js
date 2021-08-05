//Closure é o escopo criado quando a funcao é declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas á funcao  

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