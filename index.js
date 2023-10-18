"use strict"
console.clear()
const popProcessando = document.getElementById("app-processando")
const appInicial = document.getElementById("app")

function esconderDisplay(ativar, element) {
  if (ativar === true) {
    element.style.display = "none"
  }
  else {
    element.style.display = "flex"
  }
}

function processandoDados(Dela, Dele) {
  esconderDisplay(true, appInicial)
  esconderDisplay(false, popProcessando)

  popProcessando.classList.add("fadeIn")

  const nomeDele = popProcessando.querySelector("#ele")
  const nomeDela = popProcessando.querySelector("#ela")

  nomeDele.textContent = Dele
  nomeDela.textContent = Dela


  var bar = document.getElementById("bar");
  var progress = 0;
  let idSet = setInterval(function () {
    progress++
    if (progress === 100) {
      clearInterval(idSet)
      mostrarResultado()
    }
    bar.value = progress

  }, 75)

}


function tratandoDados() {
  const botaoInicar = document.getElementById("botaoIniciar")
  botaoInicar.addEventListener("click", async function (event) {
    event.preventDefault()
    const parent = event.currentTarget.parentNode
    const nomeDele = parent.children.nomeDele.value || ""
    const nomeDela = parent.children.nomeDela.value || ""

    if (!nomeDela && !nomeDele) {
      window.alert("ERROR - Preencha os dois campos de nomes")
      return
    }

    processandoDados(nomeDela, nomeDele)

  })
  return {
    nomeDela,
    nomeDele
  }
}

function mostrarResultado() {
  const randomTime = Math.floor(Math.random() * (1000 - 2500) + 2500)

  setTimeout(function () {
    esconderDisplay(true, appInicial)
    esconderDisplay(true, popProcessando)
    const videoSusto = document.getElementById("videoExibir")
    videoSusto.hidden = false
    videoSusto.style.display = "block"
    videoSusto.play()

  }, randomTime)

}



tratandoDados()