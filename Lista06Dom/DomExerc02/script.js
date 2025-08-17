//Criar um campo input que altera a cor de fundo de toda a página.
function AlteraCorBody(){
    let cor = document.getElementById("SelecaoCor").value;
    document.body.style.backgroundColor = cor;
}
//obs: Para teste: Escreva a cor em inglês. Ex: Yellow, blue...