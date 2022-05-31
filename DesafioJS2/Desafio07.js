function palindromo(palavra){
    palind = {};
    let palavra1 = palavra.toUpperCase().replace(/\s+/g, '').normalize("NFD").replace(/[^a-zA-Zs]/g, "");
    let palavra2 = palavra1;
    palavra2 = palavra2.split('').reverse().join('');

    if (palavra1 == palavra2){
        palind.palindromo = true;
    }
    else{
        palind.palindromo =  false;
    }
    palind.palavra = palavra;

    return palind;
}
