let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#gmap')

nome.style.width = '100%'
nome.style.borderRadius = '5px'
email.style.width = '100%'
email.style.borderRadius = '5px'
assunto.style.width = '100%'
assunto.style.borderRadius = '5px'

function validaNome(){
    let txtNome = document.querySelector('#avisoNome')
    if(nome.value.length < 3){
        txtNome.style.color = "red"
        txtNome.innerHTML = "Nome inválido"

    } else {
        txtNome.style.color = "green"
        txtNome.innerHTML = "Nome válido"
        nomeOk = true
    }

    if(nome.value.length == 0){
        txtNome.innerHTML = ""
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#avisoEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.style.color = "red"
        txtEmail.innerHTML = "E-mail inválido"

    } else {
        txtEmail.style.color = "green"
        txtEmail.innerHTML = "E-mail válido"
        emailOk = true
    }

    if(email.value.length == 0){
        txtNome.innerHTML = ""
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#avisoAssunto')
    if(assunto.value.length > 100){
        txtAssunto.style.color = "red"
        txtAssunto.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres!"

    }else if(assunto.value.length < 10 && assunto.value.length > 0){
        txtAssunto.style.color = "red"
        txtAssunto.innerHTML = "O texto é muito curto, digite no mínimo 10 caracteres"


    }else if(assunto.value.length >= 10){
        txtAssunto.style.color = "green"
        txtAssunto.innerHTML = "Assunto válido"
        assuntoOk = true  

    } else {
        txtAssunto.innerHTML = ""
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    
    }else{
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}


function mapaZoom(){
    mapa.style.transition = "5s"
    mapa.style.width = "800px"
    mapa.style.height = "500px"
    mapa.style.borderRadius = "360px" 
}

function mapaNormal(){
    mapa.style.transition = "5s"
    mapa.style.width = "400px"
    mapa.style.height = "250px" 
    mapa.style.borderRadius = "0px" 
}