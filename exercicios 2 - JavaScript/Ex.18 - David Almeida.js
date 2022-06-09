function despesasTotais(objetoProdutos){
    let despesas = 0
    for (let x in objetoProdutos){
        for (let y in objetoProdutos[x]){
            if (y == 'preco'){
                despesas = despesas + objetoProdutos[x][y]
            }
        }
    }
    return despesas
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))
