/* Poderia fazer uma lógica que comparasse letra por letra e retirasse as vogais,
mas achei esse parâmetro do replace que é mais fácil*/
function removerVogais(string){
    const semVogal = string.replace(/[aeiouà-ú]/gi,'');
    return semVogal
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
console.log(removerVogais('Lucas'))
