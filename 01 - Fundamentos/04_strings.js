const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) //Unicode
console.log(escola.indexOf('c'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log(escola.length) //tamanho da string

console.log('Escola '.concat(escola).concat("!"))
console.log("Escola "+ escola) 

console.log(escola.replace(3, 'E'))
console.log('Ana, Maria, Jose, Pedro'.split(','))
