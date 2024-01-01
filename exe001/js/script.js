/*
    window.alert('Meu primeiro alert!'); // Exibe um alerta ao usuário
    window.confirm('Está gostando?'); // Exibe um alerta com botões (confirmar e cancelar)
    window.prompt('Qual seu nome?'); // Exibe um alerta com um input de texto
*/

// Pode ser usado apenas como alert()

/*
    for(var i = 0; i < 10; i++){
        alert(i)
    }
*/

document.addEventListener("DOMContentLoaded", function(){ // Executa apenas se o DOM estiver completamente carregado.
    var mensagemHTML = document.getElementById("mensagem"); // Captura o elemento pelo ID no HTML
    mensagemHTML.innerHTML = "Essa mensagem é um teste."; // Altera o elemento HTML.
})