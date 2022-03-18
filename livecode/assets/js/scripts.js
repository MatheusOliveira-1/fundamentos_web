let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function pressionar(){
    alert("Você clicou no botão")
}

function verificarCampos(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos dever ser preenchidos!")
    }else{
        alert("Feedback enviado")
    }
}