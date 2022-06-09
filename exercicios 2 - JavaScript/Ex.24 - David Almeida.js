function contarCaractere(caractere, frase){
    let contador = 0;
    const novaFrase = frase.split('');
    for (let x = 0; x < novaFrase.length; x++){
        if (caractere == novaFrase[x]){
            contador ++;
        };
    };
    return contador;
};

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
