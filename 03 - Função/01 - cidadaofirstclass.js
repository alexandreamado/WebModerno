//Função em JS e First-Class Object (Citizens)
// Higher-Order function 

// criar de forma literal 
function fun1 () {}

//armazenar uma Função em uma variavel 
const fun2 = function () {} 

//Armazenar em um array 
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,2))

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'Ola'}
console.log(obj.falar()) 

//Passar funcao como paramentro
function run(fun){
    fun()
}

run(function () {console.log('Ola mundo')})

//Uma Função pode retornar/conter uma funcao 
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)  


console.log('Ola mundo')