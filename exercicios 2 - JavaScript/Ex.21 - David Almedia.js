function menorNumero(arrayNumeros){
    menor = Math.min(...arrayNumeros)
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))
