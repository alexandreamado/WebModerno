class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome} `)
    }
}


const p1 = new Pessoa('Alexandre')
p1.falar()

function people(nome) { 
    return {
        chamar() {
            console.log(nome)
        }
    }
} 

const p2 = people('Artur')
p2.chamar()