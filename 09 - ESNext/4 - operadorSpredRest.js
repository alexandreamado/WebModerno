//operador ...rest(juntar)/spread(spalhar)
//usar rest com paramentro de uma funcao 

// Usar spread com objecto 
const funcionarios = {nome: 'Maria', salario: 12348.99}
const clone = {activo: true, ...funcionarios} 
console.log(clone) 

//usar spread com array 
const grupoA = ['a', 'b', 'c']
const grupoB = ['d', 'e', ...grupoA]
console.log(grupoB) 