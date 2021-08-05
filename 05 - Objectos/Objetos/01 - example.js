// - Objetos literais 

// formas de criarmos objetos 
//1-  {}... objetos literal 
//2- new Object()
//3- Object.create()
const book1 = {
    title: "Clean Code",
    author: 'Robert Martin',
    page: 464,
    language: 'English',
    available: 'true'
}; 

// for(let i in book) {
//     console.log(i,': ',book[i])
// } 

const book2 = {};

for(let key in book1) {
    book2[key] = book1[key]
} 

const produto = {}

Object.defineProperty(produto, 'name', {
    value: 'Estudante',
    configurable: true,
    writable: true
    
})

produto.name = 'Jose'
console.log(produto.name)

delete produto.name 
console.log(produto.name)


