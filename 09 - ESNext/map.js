const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true }) 

console.log(tecnologias.react)
console.log(tecnologias.get('react')) 

const chavesvariadas = new Map([
    [function () {}, 'Funçao'], 
    [{}, 'Objecto'],
    [123, 'Numero']
]) 

chavesvariadas.forEach((vl, ch) => {
    console.log(ch, vl)
}) 

console.log(chavesvariadas.has(123))
console.log(chavesvariadas.delete(123)) 

console.log(chavesvariadas.set(123, 'a'))
