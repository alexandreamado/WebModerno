let p = new Promise(function (cumprirPromesa) {
    cumprirPromesa(['Ana', 'Bia', 'Carlos', 'Daniel'])
}) 

.then(valor => valor[0])
.then(valor => console.log(valor)) 