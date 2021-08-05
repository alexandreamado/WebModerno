//Cadeira de Prototipo (prototype chain) 
Object.prototype.attr0 = '0' //Nao faca isso em casa

const avo = {attr1: 'A'} 
const pai = {__proto__:avo, attr2:'B'}
const filho = {__proto__:pai, attr3: 'C'} 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) 

const carro = {
    velAtual: 0,
    velmax: 200, 
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velmax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velmax
        }
    }, 
    
    status() {
        return `${this.velAtual}km/h de ${this.velmax} km/h`
    }
} 

const ferrari = {
    modelo: 'F40',
    velmax: 324 //shadowing
} 

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` 
    }
} 

Object.setPrototypeOf(ferrari, carro) //estabeleu-se um relacao de prototipos entre dois objetos
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo) 

volvo.acelerarMais(100)
console.log(volvo.status()) 

ferrari.acelerarMais(300)
console.log(ferrari.status())