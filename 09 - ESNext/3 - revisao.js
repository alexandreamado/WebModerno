//ES8: Object.values/ Object.entries 
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj)) 

//Melhorias 
const nome = 'Paula'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
} 
console.log(pessoa.nome, pessoa.ola()) 

//Class 
class Animal {} 
class Cachoro extends Animal {
    falar() {
        return 'Au AU'
    }
} 

console.log(new Cachoro().falar())