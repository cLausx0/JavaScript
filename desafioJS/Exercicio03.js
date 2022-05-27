function basket(string){
    let posicao = 0;
    let contador = 0;
    let melhor = 0;
    let pior = 0;
    let pontos = new Array();
    pontos = string.split(' ');
    for (let x in pontos){
        pontos[x] = Number(pontos[x]);
         if (x == 0){
             melhor = pontos[x];
             pior = pontos[x];

         }
         else{
             if (pontos[x] > melhor){
                 melhor = pontos[x];
                 contador += 1;
             }
             else if (pontos[x] < pior){
                 pior = pontos[x];
                 posicao = Number(x);
             };
         };
     };

     const dados = [contador, posicao + 1];
     return dados;
}
