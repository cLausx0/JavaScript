function dinheiro(valor){
    let reais = valor
    if (reais < 0){
        reais = reais * (-1);
        reais = reais.toFixed(2)
        let resultado = '-R$ '  + reais;
        resultado = resultado.replace('.', ',');
        resultado = resultado;
        return resultado;
    }
    else{
        reais = reais.toFixed(2)
        let resultado = 'R$ '  + reais;
        resultado = resultado.replace('.', ',');
        return resultado;
    };
}
