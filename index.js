var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var marcos = window.document.getElementById("marcos")
var setaDireita = window.document.getElementById("seta-direita")


function ROLAR() {
    leonardo.style = "display:none"
    marcos.style = "display:flex"
   setaEsquerda.style = "display:flex"
   setaDireita.style = "display:none"
}
function ROLAR1() {
    marcos.style = "display:none"
    leonardo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}