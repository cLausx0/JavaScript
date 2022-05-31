function triangulo(a, b, c){
    if ((a > (Math.abs(b - c))) & (a < (Math.abs(b + c))) & (b > (Math.abs(a - c))) & (b < (Math.abs(a + c))) & (c > (Math.abs(b - a))) & (c < (Math.abs(b + a)))){
                return true
    }
    else{
        return false
    }

}
