function formatarDecimal(valorDecimal) {
    valorEmMT = `MT ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmMT)
} 

formatarDecimal(0.1 + 0.2)