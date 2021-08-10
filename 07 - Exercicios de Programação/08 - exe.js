// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function operacao(valor1, valor2) {
    let resultado = 0

    for (let i = 0; i < valor2; i++) {
        resultado += valor1
    }
    return resultado
}

console.log(operacao(2, 5))