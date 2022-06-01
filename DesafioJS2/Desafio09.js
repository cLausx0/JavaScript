function DAC(sequencia){
    const multiplicadores = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    for (let i = 0; i < multiplicadores.length; i++){
        soma += sequencia[i] * multiplicadores[i];
    };
    let resto = (soma % 11);
    if ((11 - resto) == 10 || (11 - resto) == 11){
        let dac = 0;
        return dac;
    }
    else{
        let dac = 11 - resto;
        return dac;
    };
}

function linhaDigitavel(codigo){
    let digitavel1 =
    let digitavel2 =
    let digitavel3 = 
    let digitavel4 =

}

console.log(linhaDigitavel('431242341111234123567612348765412'))
