//Object.preventExtensions 

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoçao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'Caneta para os alunos'
delete produto.tag

console.log(produto)

//object.seal 
const pessoa = { nome:'Alexandre', idade: 23}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) 

pessoa.Sobrenome = 'Amado'
delete pessoa.nome 
pessoa.idade = 20
console.log(pessoa) 

//Object.freeze = selado + valores constantes