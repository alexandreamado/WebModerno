const carinho = [ 
    '{"nome": "Boracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}', 
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}' 
]

//Retornar um array apenas com os preços 
const paraObjecto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carinho.map(paraObjecto).map(apenasPreco)
console.log(resultado) 
