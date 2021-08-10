function estaEntre(minimo, maximo, numero, inclusive = false) {
    if(inclusive) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
} 

console.log(estaEntre(10, 100, 120))
console.log(estaEntre(10, 100, 20))