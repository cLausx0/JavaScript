function inverso (recebe){
    if (typeof(recebe) == 'boolean'){
        let teste = !recebe
        return teste
    }

    else if (typeof(recebe) == 'number'){
        teste = recebe * (-1)
        return teste
    }

    else{
        teste = `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof(recebe)}`
        return teste
    }
}

console.log(inverso(7))
console.log(inverso(-20))
console.log(inverso(false))
console.log(inverso('teste'))
console.log(inverso(true))
