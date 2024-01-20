
 let formulario = document.querySelector(".fale-conosco")
 let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao() {
  // Verifica se a largura da janela é menor que 600 pixels
  if (window.innerWidth < 600) {
    formulario.style.left = "50%" // Ajusta para 5vw em modo responsivo
    formulario.style.transform = "translateX(-50%)"
  } else {
    formulario.style.left = "37%" // Mantém como 9vw em outros casos
  }
  mascara.style.visibility = "visible"
}

 function sumirFormulario() {
   formulario.style.left = "-330px"
   mascara.style.visibility = "hidden"
 }