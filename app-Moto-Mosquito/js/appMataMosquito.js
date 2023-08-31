//Tela
let altura = 0
let largura = 0

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
setInterval(() => {
    posicaoRandomica()
}, 1000);