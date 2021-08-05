// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function mes(number) {
    switch (number) {
        case (1): console.log('Janeiro')
            break
        case (2): console.log('Fevereiro')
            break
        case(3): console.log('Março')
            break 
        case(4): console.log('Abril')
            break
        case(5): console.log('Maio')
            break
        case(6): console.log('Junho')
            break
        case(7): console.log('Julho')
            break
        case(8): console.log('Agosto')
            break
        case(9): console.log('Setembro')
            break
        case(10): console.log('Outubro')
            break
        case(11): console.log('Novembro') 
            break
        case(12): console.log('Dezembro')
            break
        default: console.log('Opçao Invalida!') 
    } 

     return number
} 

mes(1)
mes(2)
mes(3)
mes(4)
mes(5)
mes(6)
mes(7)
mes(8)
mes(9)
mes(10)
mes(11)
mes(12)
mes(13)

