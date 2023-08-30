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
let posiçãoX = Math.floor(Math.random() * largura) - 90
let posiçãoY = Math.floor(Math.random() * altura) - 90
posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

//Criar Imagem do Mosquito
let img_mosquito = document.createElement('img')
img_mosquito.setAttribute('src', 'imagens/mosquito.png')
img_mosquito.setAttribute('class', tamanhoAleatorio())
img_mosquito.style.left = posiçãoX + 'px'
img_mosquito.style.top = posiçãoY + 'px'
img_mosquito.style.position = 'absolute'
document.body.appendChild(img_mosquito)

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
console.log(tamanhoAleatorio())