//Arrow functions 
const soma = (a, b) => a + b 
console.log(soma(10, 10)) 

//Arrow Function (this) 
const lexico1 = () => console.log(this === exports) 
const lexico2 = lexico1.bind({}) 

//parametro default 
function log(texto = 'Node') {
    console.log(texto)
} 

log('SOUUUUUUUUUUUUUUUUUUUUU mais forte!') 

//operador rest 
function total (...numeros) {
    let total = 0 
    numeros.forEach(n => total += n)
    return total
} 

console.log(total(2, 3))