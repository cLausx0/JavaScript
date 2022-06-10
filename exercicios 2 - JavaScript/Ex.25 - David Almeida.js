function buscarPalavrasSemelhantes(palavra, array){
    let semelhantes = [];
    for (let x = 0; x < array.length; x++){
        if (array[x].includes(palavra)){
            semelhantes.push(array[x])
        }
    } 
    return semelhantes
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++", 'pythonzera']))
