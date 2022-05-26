// 1. função de início: checa se o gatilho está no topo do html 
function escutaScroll(event){
    // seleciona todos os gatilhos 
    let gatilhos = document.querySelectorAll(".gatilhos > div");

    // para cada gatilho
    for(let gatilho of gatilhos){
        // identifica a posição atual 
        let posicao = gatilho.getBoundingClientRect();
        // identifica o valor do data-alvo dentro dele 
        let alvo = gatilho.dataset.alvo;
        // seleciona o passo que está agrupado com esse alvo 
        let passo = document.querySelector('.'+alvo);
        // Verificar se a posição do gatilho está acima do topo da página
        if(posicao.top <= 0 && posicao.top > -posicao.height){
            // se sim, adiciona a classa ativa [inicial]
            passo.classList.add('passo-ativo');
        }else{
            // caso contrário, retira
            passo.classList.remove('passo-ativo');
        }
    }
}

// 2. escuta o evento de rolagem 
window.addEventListener('scroll', escutaScroll);