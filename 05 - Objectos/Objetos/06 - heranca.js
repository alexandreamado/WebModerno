const funcionalLanguage = {
    paradigm: "Funcional",
    nome: 'Herdou'
}

const ooFuncional = {
    paradigma: 'Orientado a objetos'
}

const scheme = Object.create(ooFuncional)
scheme.name = "Scheme"
scheme.year = 1975

console.log(scheme.paradigma)

const javascript = Object.create(funcionalLanguage)
javascript.name = "JavaScript"
javascript.year = 1995


// for(let key in scheme) {
//     console.log(key, scheme.hasOwnProperty(key))
// };

