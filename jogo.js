var elementos = document.querySelectorAll('.player div > img');
var playerOpt = "";
var inimigoOpt = "";

function resetarOpacidade(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.2;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',(t)=>{
        resetarOpacidade();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt')

        inimigoJogar();
    });
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.inimigo div > img');
    for(var i = 0; i < enemyOptions.length; i++){
        
            enemyOptions[i].style.opacity = 0.2;
        
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.inimigo div > img');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].style.opacity = 1;
            inimigoOpt = enemyOptions[i].getAttribute('opt')
        }
    }
    validarVitoria();
}

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo terminou empatado!"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Você Ganhou!"
        }else{
            vencedor.innerHTML = "Você Perdeu!"
        }
    }else  if(playerOpt == "pedra"){
        if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo terminou empatado!"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Você Ganhou!"
        }else{
            vencedor.innerHTML = "Você Perdeu!"
        }
    }else{
        if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O jogo terminou empatado!"
        }else if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Você Ganhou!"
        }else{
            vencedor.innerHTML = "Você Perdeu!"
        }
    }
}