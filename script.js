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