// HTML5
let cartãohtml = document.querySelector("#cartão1")
let textohtml = document.querySelector("#texto1")
function html5enter() {
    cartãohtml.style.width = "300px"
    cartãohtml.style.height = "450px"
    cartãohtml.style.transition = "0.5s"
    cartãohtml.style.marginLeft = "-100px"
    textohtml.style.opacity = "1"
    textohtml.style.transition = "opacity 0.2s ease-out;"
}
function html5out() {
    cartãohtml.style.width = "200px"
    cartãohtml.style.height = "250px"
    cartãohtml.style.transition = "0.5s"
    cartãohtml.style.marginLeft = "0px"
    textohtml.style.opacity = "0"
}

// CSS3
let cartãocss = document.querySelector("#cartão2")
let textocss = document.querySelector("#texto2")
function css3enter() {
    cartãocss.style.width = "300px"
    cartãocss.style.height = "450px"
    cartãocss.style.marginLeft = "-50px"
    cartãohtml.style.marginLeft = "-50px"
    cartãojs.style.marginLeft = "50px"
    cartãojs.style.transition = "0.5s"
    cartãocss.style.transition = "0.5s"
    textocss.style.opacity = "1"
    textocss.style.transition = "opacity 0.2s ease-out;"
}
function css3out() {
    cartãocss.style.width = "200px"
    cartãocss.style.height = "250px"
    cartãocss.style.marginLeft = "0px"
    cartãohtml.style.marginLeft = "0px"
    cartãojs.style.marginLeft = "0px"
    cartãojs.style.transition = "0.5s"
    cartãocss.style.transition = "0.5s"
    textocss.style.opacity = "0"
}

// JAVASCRIPT
let cartãojs = document.querySelector("#cartão3")
let textojs = document.querySelector("#texto3")
function jsenter() {
    cartãojs.style.width = "300px"
    cartãojs.style.height = "450px"
    cartãojs.style.transition = "0.5s"
    textojs.style.opacity = "1"
    textojs.style.transition = "opacity 0.2s ease-out;"
}
function jsout() {
    cartãojs.style.width = "200px"
    cartãojs.style.height = "250px"
    cartãojs.style.transition = "0.5s"
    textojs.style.opacity = "0"
}