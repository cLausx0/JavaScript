function segundoMaior(numeros){ 
    let posicaoMaior = 0;
    let maior2 = 0;
    let maior = 0;
    for (let i in numeros){
        if (numeros[i] > maior){
            maior = numeros[i];
            posicaoMaior = i;
        };
    };
    numeros.splice(posicaoMaior, 1);

    for (let x in numeros){
        if (numeros[x] > maior2){
            maior2 = numeros[x];
        };
    };
    
    return maior2;
};

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))
console.log(segundoMaior([1, 2, 3, 4, ,5 ,6, 7]))
console.log(segundoMaior([76, 12, 16, 56, 82]))
console.log(segundoMaior([8, 7.6, 8.9, 6]))
