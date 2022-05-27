function CalcularSalario(horas, pagamentoH){
    const Total = horas * pagamentoH;
    const String = `Salário igual a R$ ${Total}`
    return String;
}

console.log(CalcularSalario(150, 40.5))
console.log(CalcularSalario(200, 30))
console.log(CalcularSalario(235, 27))
