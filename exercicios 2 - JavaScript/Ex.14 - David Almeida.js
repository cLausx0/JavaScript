function objetoParaArray(objeto){
    arrayNovo = []
    for (let x in objeto){
        arrayNovo.push([x, objeto[x]])        
    }
    return arrayNovo
}

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    }))

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))
