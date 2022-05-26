function maiorOuIgual(n1, n2){
    let teste
    if (n1 >= n2){
        teste = true
    }
    else{
        teste = false
    }
    return teste
}

console.log(maiorOuIgual(1, 1))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(7, 2))
console.log(maiorOuIgual(5, 8))
console.log(maiorOuIgual(13, 21))
