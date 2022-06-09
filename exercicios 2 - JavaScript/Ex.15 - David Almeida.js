function receberSomenteOsParesDeIndicesPares(array){
    let newArray = []
    for (let x = 0; x < array.length; x++){
        if ((array[x] % 2 == 0) & (x % 2 == 0)){
            newArray.push(array[x])
        }
    }
    return newArray
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
console.log(receberSomenteOsParesDeIndicesPares([18, 16, 15, 15, 14, 19, 20, 24]))
