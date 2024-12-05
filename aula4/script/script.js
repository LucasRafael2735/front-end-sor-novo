let button = document.getElementById("btn")
let button2 = document.getElementById("btn2")
let cor = i
function imprimiFrase() {
     console.log("Click")
}
 
button.addEventListener("click",imprimiFrase)


function trocaCorFundo() {
    button.style.backgroundColor = 'red'
}


button2.addEventListener("click",trocaCorFundo)

function tiraFundo() {
    i++
    if (i % 2 == 0) {
         button.style.backgroundColor = 'pink'
    } else {
         button.style.backgroundColor = 'red'
    }
}