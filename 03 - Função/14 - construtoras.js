function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado 
    let velocidadeAtual = 0 

    //metodo publico 
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        } 
        return velocidadeAtual
    } 

    //metodo Publico 
    // this.getVelocidadeAtual = function () {
    //     return velocidadeAtual
    // }
}

const toyota = new Carro 
console.log(toyota.acelerar())

const ferrari = new Carro(350, 20) 
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()