function filtrarNumeros(array){
    let arrayNovo = []
    for (let x of array){
        let teste = typeof(x);
        if (teste == 'number'){
            arrayNovo.push(x)
        }
    }
    return arrayNovo
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))
