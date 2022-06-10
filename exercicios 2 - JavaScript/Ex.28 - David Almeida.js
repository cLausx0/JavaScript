function filtrarPorQuantidadeDeDigitos(arrayNumeros, digito){
    let arrayFiltrado = [];
    for (let itens in arrayNumeros){
        if (String(arrayNumeros[itens]).length == digito){
            arrayFiltrado.push(arrayNumeros[itens])
        }
    }
    return arrayFiltrado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
