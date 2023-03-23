const btnDiminuir = document.getElementById('btnDiminuir')
const btnAumentar = document.getElementById('btnAumentar')
const btnResetar = document.getElementById('btnResetar')
const p = document.getElementById('contador')

//estado da aplicação
let numero = 0

//função aumentar, diminuir, resetar e mostrar na tela
function contador() {

    function mostrarNaTela() {
        p.innerText = numero   //p.inntext (o que estiver contido no 'p' receberá o valor de 'numero' )
    }

    btnDiminuir.addEventListener('click', () => {
        numero--
        mostrarNaTela()
    })

    btnAumentar.addEventListener('click', () => {
        numero++
        mostrarNaTela()
    })

    btnResetar.addEventListener('click', () => {
        if (numero > 0 || numero < 0) {
            numero = 0
            console.log('é zero!!!')
            mostrarNaTela()
        }
    })
}
contador()


//quando o contador ficar negativo, o nº ficará vermelho

function mudaCorNumero() {
    btnDiminuir.addEventListener('click', () => {
        if (numero < 0) {
            console.log('é menor que zero')
            p.style.color = "red"
        }
    })

    btnAumentar.addEventListener('click', () => {
        if (numero >= 0) {
            console.log('é zero ou maior que zero')
            p.style.color = "white"
        }
    })

    btnResetar.addEventListener('click',()=>{
        if(numero === 0){
            p.style.color='white'
        }
    })
}
mudaCorNumero()
