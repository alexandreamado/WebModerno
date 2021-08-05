//map() 
/**
 * Usamos o map quando queremos obter um novo array com a mesma quantidade de intens do array original, mas com 
 * cada item transformado .
 * o map normalmente recebe três tipos de paramentros <item, index, array>: So o primeiro é obrigatorio
 */
const numbers = [1, 2, 3, 4] 
const doubleSquare = numbers.map(item => item ** 2) 

const tvShows = [
    {nome: 'Breaking Bad' , releaseYear: 2008},
    {nome: 'Mr Robot' , releaseYear: 2015},
    {nome: 'True Detetive' , releaseYear: 2014},
    {nome: 'Hannibal' , releaseYear: 2013},
    {nome: 'Mandalorian' , releaseYear: 2019},
    {nome: 'Vikings' , releaseYear: 2013},
    {nome: 'Watchmen' , releaseYear: 2019}
] 

const callName = tvShows.map(({ nome }) => nome)
console.table(callName)