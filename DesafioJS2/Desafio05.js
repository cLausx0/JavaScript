function saque(valor){
    let contador2 = 0
    let contador5 = 0
    let contador10 = 0
    let contador20 = 0
    let contador50 = 0
    let contador100 = 0

    if (valor == 0){
        cedulas = {}
        return cedulas
    } 
    else{
        let cedulas = {
            R$100: 0,
            R$50: 0,
            R$20: 0,
            R$10: 0,
            R$5: 0,
            R$2: 0,
        }
        while (valor != 0){
            if (valor >= 100){
                contador100++;
                cedulas.R$100 = contador100
                valor -= 100;
            }
            else if (valor >= 50){
                contador50++;
                cedulas.R$50 = contador50
                valor -= 50;
            }
            else if (valor >= 20){
                contador20++;
                cedulas.R$20 = contador20
                valor -= 20;
            }
            else if (valor >= 10){
                contador10++;
                cedulas.R$10 =  contador10
                valor -= 10;
            }
            else if (valor >= 5){
                contador5++;
                cedulas.R$5 = contador5
                valor -= 5;
            }
            else if (valor >= 2){
                contador2++;
                cedulas.R$2 = contador2
                valor -= 2;
            }
            else if (valor != 0){
                cedulas = {}
                break
            }
        }
        return cedulas
    }

}
