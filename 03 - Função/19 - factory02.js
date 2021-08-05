function criarProduto(nome, Preco) {
    return {
        nome,
        Preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Santal', 50))
console.log(criarProduto('Dell Vostro 15', 22000))
console.log(criarProduto('fusca', 6353))