//Criar um botão que ao clicar exibe um alerta com a hora atual.
function ExibirHora(){
    const hora = new Date()
    alert(hora.toLocaleTimeString())
}