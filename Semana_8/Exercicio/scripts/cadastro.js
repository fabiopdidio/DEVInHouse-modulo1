const quartoInput = document.getElementById("quarto");
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const inicioInput = document.getElementById("data-inicio");
const terminoInput = document.getElementById("data-termino");

function validarCampos() {
  if (nomeInput.value === "") {
    quartoInput.style.border = "1px solid red";
  } else {
    quartoInput.style.border = ""; // Remove a borda vermelha se o campo estiver preenchido
  }
  if (nomeInput.value === "") {
    nomeInput.style.border = "1px solid red";
  } else {
    nomeInput.style.border = ""; // Remove a borda vermelha se o campo estiver preenchido
  }

  if (cpfInput.value === "") {
    cpfInput.style.border = "1px solid red";
  } else {
    cpfInput.style.border = "";
  }

  if (inicioInput.value === "") {
    inicioInput.style.border = "1px solid red";
  } else {
    inicioInput.style.border = "";
  }

  if (terminoInput.value === "") {
    terminoInput.style.border = "1px solid red";
  } else {
    terminoInput.style.border = "";
  }
}

// Evento de validação quando o formulário é enviado
const formulario = document.getElementById("cadastroForm");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário para demonstração
  validarCampos();
});
