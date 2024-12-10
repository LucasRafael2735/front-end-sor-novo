async function buscarCep() {
      const cep = document.getElementById('cep').value;

      if (cep.length !== 8) {
         alert('CEP inválido. certifique-se de digitar 8 números.');
          return;
      } 
        
      const response = await fetch(`https:/viacep.com.br/ws/${cep}/json/`, {method:'GET'})
       
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado')

        } 
        else {
            document.getElementById('logradouro').textContent = data.logradouro || 'Não disponível';
            document.getElementById('bairro').textContent = data.bairro || 'Não disponível';
            document.getElementById('cidade').textContent = data.localidade || 'Não disponível';
            document.getElementById('estado').textContent = data.uf || 'Não disponível';

            document.getElementById('resultado').style.display = 'block';
        } 
}

