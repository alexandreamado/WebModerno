const http = require('http')
const { get } = require('lodash')


const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultando = ''

            res.on('data', dados => {
                resultando += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultando))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
} 
//Recurso do ES8 
//Objetivo de simplificar o uso de promises 
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C') 
    return [].concat(ta, tb, tc)
} //retorna um objeto AsyncFunstion 

obterAlunos() 
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))