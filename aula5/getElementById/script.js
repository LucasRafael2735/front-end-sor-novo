/* const button = document.getElementById("btn")
const texto = document.getElementById("texto") */

/* 
const button2 = document.getElementById("btn2")
const  texto2 = document.getElementById("meuParagrafo")


function alteraTexto() {
     
     if (texto2.innerText === 'Texto original' ) {
           texto2.innerText = 'O texto foi alterado'
     } 
     
     else {
        texto2.innerText = 'Texto original'
     }
     
}
button2.addEventListener("mouseover", alteraTexto) */


/* function alteraText() {
     texto.style.color = 'purple'
     texto.innerText = 'O texto foi alterado, UAU!'

} */

/* button.addEventListener("click", alteraText) */ /* TUDO OQUE TA COMENTADO NÃO VOU USAR MAIS!*/

/* const button = document.getElementById('btn3')
const texto = document.getElementById('dobro')
const chave = document.getElementById('tecla')

function clickDouble() {
      alert("Tu clicou duas vezes")
}

button.addEventListener("dblclick", clickDouble)

function pressionaTecla(event) {
      console.log('Tecla pressionada: ' + event.key)
}

documenta.addEventListener('keydown', pressionaTecla)

function teclaTexto(event) {
     chave.innerText = 'Tecla pressionada:' + event.key 
}
 */

const form = document.getElementById("formulario")
const campoTexto = document.getElementById("mensagem")
const widow = document.getElementById("mensagem")

   form.addEventListener('submit', function(event)  {
     event.preventDefault()
     alert('Formulário enviado')
   })

campoTexto.addEventListener('focus', function () {
     campoTexto.style.backgroundColor ="yellow"
})

campoTexto.addEventListener('blur', function () {
     campoTexto.style.backgroundColor ="white"
})

 campoTexto.addEventListener('change', function() {
     alert('valor aletrado para:' + campoTexto.value)
 })

widow.addEventListener('scroll', function () {
     console.log('A página foi rolada. Posição scroll:' + widow.scrollY)
})