// retorna a copia de um objeto
const javascript = Object.create({})

Object.assign(javascript, {
    name: "Javascript",
    year: 1995,
    paradigm: "OO and Funcional"

}, {
    author: "Brendan Eich",
    influencedBy: "Java, Schema and JS"
})
// console.log(javascript)  

const js = {
    name: "Javascript",
    year: 1995,
    paradigm: "OO and Funcional"
}

// console.log(Object.values(js))
// console.log(Object.keys(js))
// console.log(Object.entries(js))




