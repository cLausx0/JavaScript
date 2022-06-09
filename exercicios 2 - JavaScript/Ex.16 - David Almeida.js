function checarAnoBissexto(ano){
    if (ano % 4 == 0){
        teste = true
    }
    if (ano % 100 == 0){
        if (ano % 400 == 0){
            teste = true
        }
        else{
            teste = false
        }
    }
    return teste
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(500))
console.log(checarAnoBissexto(1200))
console.log(checarAnoBissexto(1700))
console.log(checarAnoBissexto(2052))
