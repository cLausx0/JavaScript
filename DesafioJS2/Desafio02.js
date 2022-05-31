function juros(capital, taxa, tempo){
    let montante = capital * (1 + taxa)**tempo;
    return montante.toFixed(2);
}
