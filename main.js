const botoes = document.querySelectorAll(".botao");
const texto = document.querySelector(".aba-conteudo");

for(let i=0; i <  botoes.length; i++){
   botoes[i].onclick = function(){
   
    for(let i=0; i <  botoes.length; i++){
        botoes[j].classList.remove("ativo");
    }
    

    botoes[i].classList.add("ativo"); 
    textos[i].classList.add("ativo");
   }
    console.log(botoes[i]);
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();
 
contadores[0].textContent = tempoObjetivo1;

contadores[0].textContent = "Contagem regressiva";
