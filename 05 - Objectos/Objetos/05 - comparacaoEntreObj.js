const book1 = {
    title: 'Alexandre the great!!',
    author: undefined
} 

const book2 = {
    title: 'Alexandre the great!!',
    author: undefined, 
} 

// Primeira formas de comparar objetos
let equal = true;
for(let key in book1) {
    if(book1[key] !== book2[key]) 
        equal = false
}

for(let key in book2) {
    if(book2[key] !== book1[key]) 
        equal = false
} 

// Segunda formas de compara objetos
const eQual = JSON.stringify(book1) === JSON.stringify(book2)
console.log(eQual)
console.log(equal)