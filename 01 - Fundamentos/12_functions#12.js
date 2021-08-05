//armazenando uma variavel em uma constante 

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const imprimirSoma_ = (a, b) => {
    console.log(a * b)
}

imprimirSoma_(10, 3)

//retorno implicito

const subtracao = (a, b) => a - b 
console.log(subtracao(3, 2))

const sub = a => console.log(a)
sub(10)