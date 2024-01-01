// window.alert('Meu primeiro alert!');
// window.confirm('Está gostando?');
// window.prompt('Qual seu nome?');
// Pode ser usado apenas como alert

// for(var i = 0; i < 10; i++){
//     alert(i)
// }

document.addEventListener("DOMContentLoaded", function(){ // Executa apenas se o DOM estiver completamente carregado.
    var mensagemHTML = document.getElementById("mensagem"); // Captura o elemento pelo ID no HTML
    mensagemHTML.innerHTML = "Essa mensagem é um teste"; // E altera sua mensagem final.
})



