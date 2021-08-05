// arrow functions 

let dobro = function (a) {
    return 2 * a
}

dobro = () => {
    return 2 * a
}

dobro = a => 2 * a //retorno implito 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}
console.log(ola())


ola = () => 'Ola mundo'
console.log(ola())