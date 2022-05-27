function receberPrimeiroEUltimoElemento(array){
    let final = array.length
    resultado = [array[0], array[final - 1]]
    return resultado
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']))
console.log(receberPrimeiroEUltimoElemento([1, 2, 3]))
console.log(receberPrimeiroEUltimoElemento(['David', 'Gabriel', 'Lavinia']))
console.log(receberPrimeiroEUltimoElemento([false, true, false, true]))
