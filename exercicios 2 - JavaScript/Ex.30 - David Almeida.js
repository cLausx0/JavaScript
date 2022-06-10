function receberMelhorEstudante(objetoEstudantes){
    let melhorEstudante = {nome: '', media: ''};
    let mediaMaior = 0;
    let nomeMaior = '';
    for (let x in objetoEstudantes){
        let soma = 0;
        let notas = Object.values(objetoEstudantes[x]);
        for (let a in notas){
            soma = notas[a] + soma;
        }
        let media = soma / notas.length;
        if (media > mediaMaior){
            mediaMaior = media;
            nomeMaior = x;
        }
        melhorEstudante.nome = nomeMaior;
        melhorEstudante.media = mediaMaior;
    }
    return melhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }))
