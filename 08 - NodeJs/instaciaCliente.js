const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica') 

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')() 

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) 

contadorC.inc()
contadorC.inc() 
console.log(contadorD.valor)
