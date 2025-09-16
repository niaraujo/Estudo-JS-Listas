//pagina de cadastro
let nomevali = ""
let emailvali = ""
let senhavali = ""


function salvar(){
    let nomevali = document.getElementById("nomecad").value;
    let emailvali = document.getElementById("emailcad").value;
    let senhavali = document.getElementById("senhacad").value;

    if(nomevali == "" && emailvali == "" && senhavali ==""){
        alert("Prencha todos os campos")
    }else{
    localStorage.setItem("nome", nomevali);
    localStorage.setItem("email", emailvali);
    localStorage.setItem("senha", senhavali);



    alert("Cadastro realizado com sucesso!");
    window.location.href = 'indexLogin.html';
}
}

//pagina de login
function enviar(){
    let emailDigitado = document.getElementById("email").value;
    let senhaDigitada = document.getElementById("senha").value;

    let emailSalvo = localStorage.getItem("email");
    let senhaSalva = localStorage.getItem("senha");

    if(emailDigitado === emailSalvo && senhaDigitada === senhaSalva){
        window.location.href = 'indexsumario.html';
    } else {
        alert("Email ou senha incorretos!");
    }

}

//para exibir o nome do usuario
document.addEventListener("DOMContentLoaded", function() {
    let nomesalvo = localStorage.getItem("nome");
    if (nomesalvo) {
        document.getElementById("text").innerText = `Seja bem vindo ${nomesalvo}`;
    }
});


//ex01
    function soma(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado = null
    
    resultado = numero1+numero2
    document.getElementById("result").innerText = resultado

    }

    function subtracao(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado = null
    
    resultado = numero1-numero2
    document.getElementById("result").innerText = resultado

}

    function multiplicacao(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado = null
    
    resultado = numero1*numero2
    document.getElementById("result").innerText = resultado

}
    function divisao(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado = null
    
    resultado = numero1/numero2
    document.getElementById("result").innerText = resultado
  
}

//ex02
function divisaoresto(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let resultado = null
    resultado = numero1%numero2
    document.getElementById("result").innerText = resultado
}

//03
function verificaridade(){
    let idade = parseInt(document.getElementById("idadecamp").value)
    if(idade >= 18){
         document.getElementById("result").innerText = "Você é maior de idade :)"
    }
    else{
        document.getElementById("result").innerText = "Você é menor de idade :("
    }


}

//ex04
function contagemcomfor(){
    let exibir = document.getElementById("contagem");
    for(let i = 0; i <= 20; i++){
        setTimeout(() => {
            exibir.value = i; 
        }, i * 1000); 
    }
}

function zerar(){
    let exibir = document.getElementById("contagem");
    exibir.value = 0; 
}

//05
function contagemcomwhile() {
    let exibir = document.getElementById("contagem");
    let i = 20;

    while (i >= 0) {
        let valor = i; 
        setTimeout(() => {
            exibir.value = valor;
        }, (20 - i) * 1000);
        i--;
    }
}

//06
function saudacao(){
    let nome = document.getElementById("nomeinserido").value
    document.getElementById("mostrar").innerHTML = (`Seja bem vindo ${nome}!!!`)
}

//07
function menoremaior(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    
   if(numero1>numero2){
    document.getElementById("result").innerText = `O Primeiro numero é maior, pois ${numero1} é maior que ${numero2}.`
    }
    else if(numero1 == numero2){
    document.getElementById("result").innerText = `Os numeros são iguais.`
    }
    else{
    document.getElementById("result").innerText = `O segundo numero é maior, pois ${numero1} é menor que ${numero2}.`
    }
}

//08
function média(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let numero3 = parseFloat(document.getElementById("n3").value)
    let soma = numero1+numero2+numero3
    let media = soma/3
    document.getElementById("result").innerText = media
}

//09
    function mostrarPares() {
      let lista = document.getElementById("lista");
      lista.innerHTML = ""; 

      let i = 1;
      while (i <= 20) {
        if (i % 2 === 0) {
          let li = document.createElement("li"); 
          li.textContent = i; 
          lista.appendChild(li);
        }
        i++;
      }
    }

//10
function contagemcomwhile() {
    let exibir = document.getElementById("contagem");
    let i = 10;

    while (i >= 0) {
        let valor = i; 
        setTimeout(() => {
            exibir.value = valor;
        }, (10 - i) * 1000);
        i--;
    }
}