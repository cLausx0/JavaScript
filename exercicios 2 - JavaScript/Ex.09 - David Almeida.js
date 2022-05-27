function repetir(elemento, repetição){
    let termos = [];
    for (let i = 0; i < repetição; i++){
        termos.push(elemento);
    }
    return termos;
}

console.log(repetir(7, 3));
console.log(repetir('Lucas', 7));
console.log(repetir('Lav', 12));
console.log(repetir(1, 0));
