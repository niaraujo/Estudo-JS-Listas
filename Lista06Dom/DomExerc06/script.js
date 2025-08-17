//Criar um formulário simples que exibe alerta com os dados ao enviar

function EnviarDados(){
    let nome = document.getElementById("NameCamp").value;
    let email = document.getElementById("EmailCamp").value;
    alert(`Os dados Nome: ${nome} e E-mail: ${email} foram enviados!`)
}