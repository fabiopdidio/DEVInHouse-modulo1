function classificaIdade(idade) { // Inicializa funcao
  if (idade <= 15) { // Verifica se a pessoa tem ate 15 anos
    alert("Pessoa Jovem"); // Se verdadeiro, mostra mensagem
  } else if (idade <= 64) { // Verifica se pessoa tem entre 16 e 64 anos
    alert("Pessoa Adulta"); // Se verdadeiro, mostra mensagem
  } else { // Se nao corresponder as outras condicoes
    alert("Pessoa Idosa"); // Mostra mensagem
  }
}

const classificarButton = document.getElementById("classificarButton"); // Cria variavel para o botao do html
classificarButton.addEventListener("click", function () { // Adiciona um ouvinte para o clique no botao
  const idadeInput = document.getElementById("idadeInput"); // Cria variavel para o input
  const idade = Number(idadeInput.value); // Converte informacao para numero
  classificaIdade(idade); // Executa a funcao
});
