// operador ...rest(juntar)/spread(spalhar)
//usar spread com objecto
const funcionario = { nome: 'Maria', salario: 1244.99 }
const clone = {ativo: true, ...funcionario}
console.log(clone) 

//usar spread com array 
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) 

