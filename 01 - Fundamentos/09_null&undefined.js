let valor //nao inicializada 
console.log(valor)

valor = null //ausencia de valor
console.log(valor) 
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 40
console.log(produto)


produto.preco = undefined //evite atribuir udefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)
