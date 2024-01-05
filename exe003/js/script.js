document.addEventListener("DOMContentLoaded", function(){
    var valor1 = window.prompt("Digite o primeiro número") // Prompt retorna uma string
    var valor2 = window.prompt("Digite o segundo número") 
    var soma = Number(valor1) + Number(valor2) // Converte a string do prompt para number
    mensagemHTML = this.getElementById("mensagem")
    mensagemHTML.innerHTML = `A soma é ${soma}` //Template de strings
});