function removerPropriedade(objeto, remover){
    let objeto_novo = Object.assign({}, objeto);
    delete objeto_novo[remover];
    console.log(Object.is(objeto, objeto_novo));
    return objeto_novo;
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"));
console.log(removerPropriedade({irmão: 'Gabi', mãe: 'Luzi', amiga: 'Lav', crush: 'hmmm kkk'}, "crush"));
