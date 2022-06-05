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
    let separador = codigo.split('');
    let digitavel = {part1: separador.slice(0, 11), part2: separador.slice(11, 22), part3: separador.slice(22, 33), part4: separador.slice(33, 44)};
    let dacs = {dac1: DAC(digitavel.part1), dac2: DAC(digitavel.part2), dac3: DAC(digitavel.part3), dac4: DAC(digitavel.part4)};
    let resultado = digitavel.part1.join('') + '-' + dacs.dac1 + ' ' + digitavel.part2.join('') + '-' + dacs.dac2 + ' ' + digitavel.part3.join('') + '-' + dacs.dac3 + ' ' + digitavel.part4.join('') + '-' + dacs.dac4;
    return resultado;
}
