const quartoInput = document.getElementById("quarto");
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const inicioInput = document.getElementById("data-inicio");
const terminoInput = document.getElementById("data-termino");

function cadastrarReserva() {
  const numero = quartoInput.value;
  const nome = nomeInput.value;
  const cpf = cpfInput.value;
  const entrada = inicioInput.value;
  const saida = terminoInput.value;

  // Aplica borda vermelha caso algum campo fique vazio.
  if (!numero || !nome || !cpf || !entrada || !saida) {
    if (!numero) quartoInput.style.border = "1px solid red";
    else quartoInput.style.border = "";

    if (!nome) nomeInput.style.border = "1px solid red";
    else nomeInput.style.border = "";

    if (!cpf) cpfInput.style.border = "1px solid red";
    else cpfInput.style.border = "";

    if (!entrada) inicioInput.style.border = "1px solid red";
    else inicioInput.style.border = "";

    if (!saida) terminoInput.style.border = "1px solid red";
    else terminoInput.style.border = "";
  } else {
    fetch("http://localhost:3000/reservas", {
      method: "POST",
      body: JSON.stringify({
        numero_quarto: numero,
        nome_cliente: nome,
        cpf: cpf,
        data_entrada: entrada,
        data_saida: saida,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        // Em caso de sucesso, melhor cenário.
        alert("Cadastrado com sucesso");
        quartoInput.value = "";
        nomeInput.value = "";
        cpfInput.value = "";
        inicioInput.value = "";
        terminoInput.value = "";

        window.history.href = "./home.html"; // Redireciona para a página inicial
      })
      .catch(() => {
        alert("Falha ao tentar cadastrar a reserva");
      });
  }
}

const formulario = document.getElementById("cadastroForm");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  cadastrarReserva();
});
