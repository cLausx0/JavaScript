function somarNumeros(array){
    let soma = 0
    for (let x = 0; x < array.length; x++){
        soma = soma + array[x]
    }
    return soma
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
console.log(somarNumeros([7, 14, 21, 15, 12, 18]))
