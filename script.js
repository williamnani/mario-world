
 let formulario = document.querySelector(".fale-conosco")
 let mascara = document.querySelector(".mascara-form")

 function cliqueiNoBotao() {
   formulario.style.left = "700px"
   mascara.style.visibility = "visible"
 }

 function sumirFormulario() {
   formulario.style.left = "-400px"
   mascara.style.visibility = "hidden"
 }