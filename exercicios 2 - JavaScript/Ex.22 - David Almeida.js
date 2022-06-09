function funcaoDaSorte(numero){
    const num2 = Math.floor(Math.random() * (10) + 1);
    if (numero ==  num2){
        return 'Parabéns! O número sorteado foi o ' + num2
    }
    else{
        return 'Que pena! O número sorteado foi o ' + num2
    }
}
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(7))
