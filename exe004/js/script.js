document.addEventListener("DOMContentLoaded", function(){
    var nome = window.prompt("Digite seu nome")
    var preco = window.prompt("Qual o preço do produto?")
    var text = document.getElementById("mensagem")
    var preco_txt = document.getElementById("preco_txt")
    if (nome.length == 1){
        text.innerHTML = `Seu nome tem ${nome.length} letra`
    }else{
        text.innerHTML = `Seu nome tem ${nome.length} letras`
    }
    preco_txt.innerHTML = `O preco do produto é ${Number(preco).toLocaleString(navigator.language, {style: 'currency', currency: 'BRL'})}`

    
})