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
    quarto: "3234",
    cliente: "Alice Mendes da Silva",
    cpf: "123.456.789-00",
    periodo: "20/08/2022-23/08/2025",
  },
  {
    quarto: "3234",
    cliente: "Alice Mendes da Silva",
    cpf: "123.456.789-00",
    periodo: "20/08/2022-23/08/2025",
  },
];

function criarLinhasTabela() {
  const tbody = document.querySelector("table tbody");

  usuarios.forEach(function (usuario) {
    const tr = document.createElement("tr");

    const quartoTd = document.createElement("td");
    quartoTd.textContent = usuario.quarto;
    tr.appendChild(quartoTd);

    const clienteTd = document.createElement("td");
    clienteTd.textContent = usuario.cliente;
    tr.appendChild(clienteTd);

    const cpfTd = document.createElement("td");
    cpfTd.textContent = usuario.cpf;
    tr.appendChild(cpfTd);

    const periodoTd = document.createElement("td");
    periodoTd.textContent = usuario.periodo;
    tr.appendChild(periodoTd);

    tbody.appendChild(tr);
  });
}

criarLinhasTabela();
