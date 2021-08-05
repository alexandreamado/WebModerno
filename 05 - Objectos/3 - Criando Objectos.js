//usando a notacao literal 
const obj1 = {} 
console.log(obj1) 

//Object em JS 
console.log(typeof Object, typeof new Object)
const obj2 = new Object 

//funcoes contrutoras 
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
} 

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 8, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) 

//Funcao factory 
function criarFuncionarios (nome, salarioBase, faltas ) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
} 

const f1 = criarFuncionarios('Andre', 10000, 10)
console.log(f1.getSalario().toFixed(2))

//Object.create 
const filha = Object.create(null)
filha.nome = 'Ana' 
console.log(filha)