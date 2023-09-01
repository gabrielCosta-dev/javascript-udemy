//Variáveis Globais
let altura = 0
let largura = 0
let vidas = 1
let tempo = 60
let criaMosquitoTempo = 1500

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    //console.log(largura, altura);
}
ajustaTamanhoPalcoJogo()

window.addEventListener('resize', ()=>{
    ajustaTamanhoPalcoJogo()
})

//Posição
function posicaoRandomica() {
    //Verificar existencia da imagem mosquito
    //Remover imagem mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.replace('fim_de_jogo.html')
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    //Aleatorizar Posição
    let posiçãoX = Math.floor(Math.random() * largura) - 90
    let posiçãoY = Math.floor(Math.random() * altura) - 90
    posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
    posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

    //Criar Imagem do Mosquito
    let img_mosquito = document.createElement('img')
    img_mosquito.setAttribute('src', 'imagens/mosquito.png')
    img_mosquito.id = 'mosquito'
    img_mosquito.classList.add(tamanhoAleatorio(), ladoAleatorio())
    img_mosquito.style.left = posiçãoX + 'px'
    img_mosquito.style.top = posiçãoY + 'px'
    img_mosquito.style.position = 'absolute'

    //Remoção por clique
    img_mosquito.addEventListener('click', ()=>{
        document.getElementById('mosquito').remove()
    })
    
    document.body.appendChild(img_mosquito)
}

//Tamanho Imagem Mosquito
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random()*3)
    
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1: 
            return 'mosquito2'
    
        case 2:    
            return 'mosquito3'
    }
}

//Alternando Lado Da Imagem Mosquito
function ladoAleatorio() {
    let lado = Math.floor(Math.random()*2)
    switch (lado) {
        case 0:
            return 'ladoA'
    
        case 1:
            return 'ladoB'
    }
}

//Adicionar e Remover Imagem Em Intervalo
let criaMosquito = setInterval(() => {
    posicaoRandomica()
}, criaMosquitoTempo);

//Ajustar Dificuldade
let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel == 'normal') {
   criaMosquitoTempo = 1500
} else if(nivel == 'dificil'){
    criaMosquitoTempo = 1000
} else {
    criaMosquitoTempo = 750
}

//Cronometro
let cronometro = setInterval(() => {
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.replace('vitoria.html')
    } else {
        document.getElementById('cronometro').innerHTML = tempo--
    }
}, 1000);



