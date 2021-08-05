const pessoa = { nome: 'Joáo' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = { nome: 'Ana' }
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua Brandáo'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa) 

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)