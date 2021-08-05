// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores. 

// function opercaoMatematica(a, b) {
//     return `
//     Soma: ${a + b}
//     Sub: ${a - b}
//     Mult: ${a * b}
//     Div: ${a / b}
//     `
// } 

// console.log(opercaoMatematica(2, 2)) 

function chamar(params) {
    return {
        callme() {
            console.log('Ola meu nome é: ', params)
        }
    }
}

const p1 = chamar('ALexandre')
p1.callme()

