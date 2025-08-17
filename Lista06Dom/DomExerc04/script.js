//Criar um input de cor para aplicar no fundo de um parágrafo.

function TrocarCor1(){
    let GuardarCor1 = document.getElementById("EscolherCor").value;
   
    document.getElementById("resultadoCor").style.backgroundColor = GuardarCor1; // pegar elemento pelo id, trocar o background pela  cor guardada na variável "GuardaCor1"
}