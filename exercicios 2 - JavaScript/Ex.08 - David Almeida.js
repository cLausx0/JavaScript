function multiplicar(n1, n2){
    if (n1 >= 0 & n2 >= 0){
        let result = 0
        for (let i = 0; i < n2; i++){
            result = result + n1
        }
        return result
    }
    else{
        return 'O número precisa ser inteiro e não negativo'
    }
}

console.log(multiplicar(10, 7))
console.log(multiplicar(23, 8))
console.log(multiplicar(53, 20))
console.log(multiplicar(79, 15))
console.log(multiplicar(8, 0))
console.log(multiplicar(-10, 20))
