const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliaca1 = 9.987
const avaliaca2 = 6.967

const total = avaliaca1 * peso1 + avaliaca2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) 

let binario = 10
console.log(binario.toString(2))