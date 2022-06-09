function calcularMedia(notas){
    let somaNotas = 0
    for (let x = 0; x < notas.length; x++){
        somaNotas = somaNotas + notas[x]
    }
    return (somaNotas/notas.length)
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))
console.log(calcularMedia([7, 15, 8, 16, 18]))
