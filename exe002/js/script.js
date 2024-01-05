document.addEventListener("DOMContentLoaded", function(){
    var array = [];
    for(var i = 0; i < 3; i++){
        var nome = window.prompt(`Qual o nome do ${i + 1} aluno?`);
        array.push(nome);
    }
    var mensagemHTML = document.getElementById("mensagem");
    mensagemHTML.innerHTML = `Bem-vindos, ${array.join(', ')}!`; 
});