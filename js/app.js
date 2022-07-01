let novajanela;
let tela = "";

function abrirjanela(){

novajanela = window.open("","crie uma nova janela","width=200,height=200");
novajanela.document.write("<p> uma nova janela foi criada <p>");

}
function fecharjanela(){
    novajanela.close();

}
function nomeNav(){

    alert(navigator.cookieEnabled);
}

function localização(){

    alert(location.hostname)
    alert(location.port);
}
function telaA(){
    alert(screen.colorDepth); 

}

