// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos. 

/**
 * formula de Juros Simples  
 * J = C.i.t 
 * Montante 
 * 
 * M = C + j
 * 
 * Formula de Juros Compostos 
 * M = C(1 + i)^t 
 * 
 */ 

function juroSimples(cInicial, taxaJuros, tempoAplicado) {
    let juros = cInicial * taxaJuros * tempoAplicado 
    let Montante = cInicial + juros 
    return Montante
}

function JuroComposto(cInicial, taxaJuros, tempoAplicado) {
    let Montante = cInicial*(1 + taxaJuros)**tempoAplicado
    return Montante
} 

console.log(JuroComposto(10, 10/100, 30))