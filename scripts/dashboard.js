const mapa = document.getElementById("mapa")
const estacaoBtn = document.getElementById("nao-sei-estacao")
console.log(mapa, estacaoBtn)

estacaoBtn.addEventListener("click", function () {
  mapa.classList.toggle("hidden")
})