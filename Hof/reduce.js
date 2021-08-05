/**
 Usamos o reduce quando queremos redouzir o array 
 á algum tipo de dado. 
   - poder 
   -  versatilidade 
 */  

const numbers = [1, 2, 3] 

const sum = numbers.reduce((acumulator, item) => {
    return acumulator + item
})

const cart = [
    {name: 'Dark Souls III', price: 95.03},
    {name: 'Shadow of the Tomb Raider', price: 101.19},
    {name: 'Sekiro: Shadows Die Twice', price: 179.99},
    {name: 'Resident Evil 2', price: 119.99},
    {name: 'Far Cry 3', price: 149.99},
] 

const produtsList = cart.reduce((acumulator, {name}) => {
    return `${acumulator} - ${name} \n`
}, '') 

console.table(produtsList)

/**
- Nome 1 
- Nome 2 
- Nome 3 
 */