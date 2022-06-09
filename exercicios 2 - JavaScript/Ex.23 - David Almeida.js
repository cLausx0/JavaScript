function contarPalavras(frase){
    quantidadePalavras = frase.split(' ');
    return quantidadePalavras.length;
}

console.log(contarPalavras('Testando essa budega'));
console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));
