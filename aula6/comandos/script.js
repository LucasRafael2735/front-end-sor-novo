 const titulo =  document.getElementById("título")
 const descricao = document.getElementsByClassName("descricao")
 const botaoMudar = document.getElementById("botao-mudar")
 const botaoAdd = document.getElementById("botao-adicionar")
 const botaoRemover = document.getElementById("botao-remover")
 const botaoRemoverClasse = document.getElementById("botao-remover-classe")

 botaoMudar.addEventListener('click', function () {
        titulo.textContent = "titulo modificado"
        descricao[0].textContent = "paragrafo Adicionado" 
 })

botaoAdd.addEventListener('click', function () {
          const novoParagrafo = document.createElement('p')
          novoParagrafo.textContent = 'Novo parágrafo criado'
          document.body.appendChild(novoParagrafo)    
})

botaoRemover.addEventListener('click', function () {
     botaoRemover.remove();
})

botaoRemoverClasse.addEventListener('click', function () {
    const novoP = document.getElementsByClassName('novo-paragrafo')
    novoP[0].classList.remove('novo-paragrafo')
})

clearTimeout(eventoTempo)