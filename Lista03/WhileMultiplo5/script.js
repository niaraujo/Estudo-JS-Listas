//Conte de 1 a 25 e diga se o número é múltiplo de 5.
let i = 1;
while(i <=25){
    let Multiplo5 = i % 5 // variável de calculo do resto da divisão por 5. Coloquei dentro do while para atualizar conforme i++ for somando
    if(Multiplo5 == 0){
        console.log(`${i} é multiplo de 5`)
    }else{
        console.log(`${i} não é multiplo de 5`)
    }
    i++
}