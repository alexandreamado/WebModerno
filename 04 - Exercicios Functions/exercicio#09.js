function resultado(notas) { 
    let aumento = notas  
    while(notas > 0 && notas < 100) {
        if(notas < 40) {
            console.log('Reprovado')
        }else if(aumento < 3) {
            console.log(notas + 5)
        }else {
            console.log('Estudante Reprovado')
        }
        break 
    }
} 

resultado(41) 
