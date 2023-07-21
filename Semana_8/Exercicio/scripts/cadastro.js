const quartoInput = document.getElementById("quarto");
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const inicioInput = document.getElementById("data-inicio");
const terminoInput = document.getElementById("data-termino");

function validarCampos() {
  // Funcao para deixar a borda do campo vermelha caso esteja vazia.
  const campos = [nomeInput, quartoInput, cpfInput, inicioInput, terminoInput]; // Var com todos campos.

  campos.forEach((input) => {
    // Para cada campo input verficia se está vazia ou não, se vazia, deixa borda vermelha.
    if (input.value === "") {
      input.style.border = "1px solid red";
    } else {
      input.style.border = "";
    }
  });
}

const formulario = document.getElementById("cadastroForm");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário para demonstração
  validarCampos();
});
