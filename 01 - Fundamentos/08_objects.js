const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 9500
prod1['Desconto Legal'] = 0.60 //Evitar atributos com espacoes

console.log(prod1)

const prod2 = {
    nome: 'Polo',
    preco: 80,
    obj: {
        iva: 1,
        obj: {
            nome: 10
        }
    }
}

console.log(prod2)