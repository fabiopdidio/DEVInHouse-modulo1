document.getElementById("logout").addEventListener("click", function (event) {
  window.location.href = "login.html";
});

const usuarios = [
  {
    quarto: "3234",
    cliente: "Alice Mendes da Silva",
    cpf: "123.456.789-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "5678",
    cliente: "Maria Souza",
    cpf: "987.654.321-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "9123",
    cliente: "Ana Oliveira",
    cpf: "555.444.333-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "4567",
    cliente: "Laura Ferreira",
    cpf: "222.333.444-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "7890",
    cliente: "Rafaela Costa",
    cpf: "777.888.999-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "2345",
    cliente: "Juliana Santos",
    cpf: "111.222.333-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "8901",
    cliente: "Fernanda Almeida",
    cpf: "444.555.666-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "1234",
    cliente: "Lucas Rodriguesf",
    cpf: "999.888.777-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "6789",
    cliente: "Pedro Henrique",
    cpf: "666.777.888-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "3456",
    cliente: "Beatriz Oliveira",
    cpf: "333.222.111-00",
    periodo: "20/08/2022-23/08/2025",
  },
];

function criarLinhasTabela() {
  const tbody = document.querySelector("table tbody"); // Seleciona a tabela no outro arquivo

  usuarios.forEach(function (usuario) {
    const tr = document.createElement("tr");

    const quartoTd = document.createElement("td");
    quartoTd.textContent = usuario.quarto;
    tr.appendChild(quartoTd);

    const clienteTd = document.createElement("td");
    clienteTd.textContent = usuario.cliente;
    clienteTd.style.whiteSpace = "nowrap"; // Evita quebrar a linha
    tr.appendChild(clienteTd);

    const cpfTd = document.createElement("td");
    cpfTd.textContent = usuario.cpf;
    cpfTd.style.whiteSpace = "nowrap"; // Evita quebrar a linha
    tr.appendChild(cpfTd);

    const periodoTd = document.createElement("td");
    periodoTd.textContent = usuario.periodo;
    tr.appendChild(periodoTd);

    const acoesTd = document.createElement("td");
    const cancelarBtn = document.createElement("button");
    cancelarBtn.textContent = "Cancelar Reserva";
    acoesTd.appendChild(cancelarBtn);
    tr.appendChild(acoesTd);

    tbody.appendChild(tr);
  });
}

criarLinhasTabela();