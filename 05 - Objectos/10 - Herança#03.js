const pai = { nome: 'Pedro', corCabelo: 'Ruivo' } 

const filha1 = Object.create(pai) 
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filho1 = Object.create(pai, {
    nome: { value: 'Amado',writable: false, enumerable: true}
})   
console.log(filho1)
filho1.nome = 'Anonimo' 

console.log(`${filho1.nome} tem Cabelo ${filho1.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filho1)) 

for(let key in filha1 ) {
    filho1.hasOwnProperty(key) ?
        console.log(key) : console.log('Por Herança')
}