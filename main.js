const botoes = document.querySelectorAll(".botao");


for(let i=0; i <  botoes.length; i++){
   botoes[i].onclick = function(){
   
    for(let i=0; i <  botoes.length; i++){
        botoes[j].classList.remove("ativo");
    }
    

    botoes[i].classList.add("ativo"); 
   }
    console.log(botoes[i]);
}
