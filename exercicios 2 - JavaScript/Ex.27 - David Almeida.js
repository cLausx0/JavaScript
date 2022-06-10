function inverter(objeto){
    let novoObjeto = {};
    for (let propriedade in objeto){
        Object.defineProperty(novoObjeto, objeto[propriedade], {
            enumerable: true,   // enumerável
            configurable: true, // configurável
            writable: true,     // gravável
            value: propriedade
        })
    }
    return novoObjeto
}

console.log(inverter({ a: 1, b: 2, c: 3}))
console.log(inverter({nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}))
console.log(inverter({nome: "Maria", profissao: "Desenvolvedora de software"}))
console.log(inverter({id: 20, nome: "caneta", descricao: "Não preenchido"}))
