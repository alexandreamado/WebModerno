function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome} `)
    }
}

const p3 = new Pessoa('Jose')
p3.falar() 
const p4 = new Pessoa('Alexandre')
p4.falar()
