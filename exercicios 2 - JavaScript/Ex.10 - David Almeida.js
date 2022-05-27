function simboloMais(numero){
    let termos = '';
    for (let i = 0; i < numero; i++){
        termos += '+';
    }
    return termos;
}

console.log(simboloMais(7))
console.log(simboloMais(2))
console.log(simboloMais(4))
console.log(simboloMais(0))
console.log(simboloMais(1))
