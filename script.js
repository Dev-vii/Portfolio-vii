// FOTO-INTRO
const foto = document.getElementById("foto1")
const circle = document.getElementById("circle")

foto.addEventListener("mouseenter", () => { //Quando o mouse entrar, a sombra aumenta
    circle.classList.add("aumentar-sombra")
})

foto.addEventListener("mouseleave", () => { //Quando o mouse sair, a sombra volta
    circle.classList.remove("aumentar-sombra")
})

// FOTO-BIO
const foto2 = document.getElementById("foto2")

foto2.addEventListener("mouseenter", () => {
    foto2.classList.add("aumentar-sombra")
})

foto2.addEventListener("mouseleave", () => {
    foto2.classList.remove("aumentar-sombra")
})

// PROBLEMA NAS IMAGENS DE CERTIFICADOS
const img = document.getElementById("lightbox")
const buttex = document.getElementById('buttex')
const over = document.getElementById('overlay')

function lightbox() {
    img.style.display = "block"
    buttex.style.display = "block"
    over.style.display = "block"
}

buttex.addEventListener('click', () => {
    img.style.display = "none"
    buttex.style.display = "none"
    over.style.display = "none"
})