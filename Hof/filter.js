/**
 * Usamos o filter quando baseado em uma condição, você quer obter 
 * um novo array com só alguns itens do array original
 */ 

const randomNumbers = [36, 99, 37, 63] 

const numberCall = randomNumbers.filter((item) => item > 37)  

const tvShows = [
    {nome: 'Breaking Bad' , releaseYear: 2008},
    {nome: 'Mr Robot' , releaseYear: 2015},
    {nome: 'True Detetive' , releaseYear: 2014},
    {nome: 'Hannibal' , releaseYear: 2013},
    {nome: 'Mandalorian' , releaseYear: 2019},
    {nome: 'Vikings' , releaseYear: 1900},
    {nome: 'Watchmen' , releaseYear: 2019},
    {nome: 'Vingadores' , releaseYear: 2012},
    {nome: 'Era de Ultron' , releaseYear: 2015},
    {nome: 'Guerra Infinita' , releaseYear: 2019},
    {nome: 'Ultimato' , releaseYear: 1996}
]   

const movieBefore2000 = tvShows.filter(({releaseYear}) => releaseYear < 2000)

const firstTravel = [
    'Sydney',
    'Berlim',
    'Lisboa',
    'Sófia', 
    'Praga',
    'Bali', 
    'Florianópolis',
] 

const secondTravel = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagred']

const commonCitys = firstTravel.filter(city => secondTravel.includes(city)) 

console.log(commonCitys)


