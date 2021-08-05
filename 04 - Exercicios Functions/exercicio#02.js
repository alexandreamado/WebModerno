// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo). 

function ladosdetrinagulo(area1, area2, area3) {
    if(area1 == area2 && area2 == area3) {
        console.log('Trinagulo Equilatero')
    }else if(area1 == area2 || area2 == area3 || area1 == area3){
        console.log('Triangulo Isosceles')
    }else{
        console.log('Triangulo escaleno')
    }
} 

ladosdetrinagulo(2,2,3)