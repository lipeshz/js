document.addEventListener("DOMContentLoaded", function(){
    // var nomes = [];
    // var precos = []

    // for(var i = 0; i < 3; i++){
    //     var nome_produto = window.prompt("Qual o nome do produto?")
    //     var preco_produto = window.prompt("Qual o preço do produto?")
    //     nomes.push(nome_produto)
    //     precos.push(preco_produto)
    // }

    // for(var i = 0; i < nomes.length; i++){
    //     document.write(`\n${nomes[i]}...${Number(precos[i]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</br>`)
    // }

    var produtos = []
    while(true){
        var item = prompt("Digite o nome do produto")
        produtos.push(item)
        var item = prompt("Agora, digite o preço do produto")
        produtos.push(item)
        var confirmar = confirm("Deseja adicionar mais itens?")
        if(confirmar !== false){
            
        }else{
            break
        }
    }
    for(var i = 0; i < produtos.length; i+=2){
        if(produtos[i] === null){

        }else{
            document.write(`${produtos[i]}...${produtos[i+1]}</br>`)
        }
        
    }
})