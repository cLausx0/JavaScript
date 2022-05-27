function estaEntre(numero, minimo, maximo, inclusivo){
    if (inclusivo == true){
        if (minimo <= numero & numero <= maximo){
            return true
        }
        else{
            return false
        }
    }

    else{
        if (minimo < numero & numero < maximo){
            return true
        }
        else{
            return false
        }
    }
}

console.log(estaEntre(7, 1, 10))
console.log(estaEntre(6, 6, 10))
console.log(estaEntre(6, 6, 10, true))
console.log(estaEntre(5, 6, 10, true))
console.log(estaEntre(6, 6, 10, false))
