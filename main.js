function playSound(idSound) {
    document.querySelector(idSound).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function() {
        playSound(`#${this.id}`)
    }
    contador++

}


