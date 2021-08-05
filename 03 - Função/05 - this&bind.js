const pessoa = {
    saudaçao: 'Bom dia', 
    falar() {
        console.log(this.saudaçao)
    } 
} 

pessoa.falar() 
const falar = pessoa.falar
falar() //conflito entre OO and funcional 

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()