function bhaskara(a, b, c){
    let delta = b**2 - 4 * a * c
    let resultado = []
    if (delta < 0){
        resultado = resultado
    }
    else if (delta == 0){
        let x1 = -b / (2 * a)
        resultado.push(x1)
    }
    else{
        let x1 = (-b + (Math.sqrt(delta))) / (2 * a)
        let x2 = (-b - (Math.sqrt(delta))) / (2 * a)
        resultado.push(x1)
        resultado.push(x2)
    }

    return resultado
}
