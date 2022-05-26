function nomeDoMes(mes){
    let date = new Date(2022, mes - 1);
    return date.toLocaleDateString('pt-BR', {month: 'long'})
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(5))
console.log(nomeDoMes(7))
console.log(nomeDoMes(10))
