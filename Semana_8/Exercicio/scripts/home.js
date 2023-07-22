let dadosReserva = [];

document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "../login.html";
});

function gerarLinhasTabela(filteredData) {

  const currentData = dadosReserva;

  currentData.map((reserva) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", reserva.id);

    const tdNumeroQuarto = document.createElement("td");
    tdNumeroQuarto.innerHTML = reserva.numero_quarto;
    tr.appendChild(tdNumeroQuarto);

    const tdNomeCliente = document.createElement("td");
    tdNomeCliente.innerHTML = reserva.nome_cliente;
    tr.appendChild(tdNomeCliente);

    const tdCpfCliente = document.createElement("td");
    tdCpfCliente.innerHTML = reserva.cpf;
    tr.appendChild(tdCpfCliente);

    const tdData = document.createElement("td");
    tdData.innerHTML = reserva.data_entrada + "-" + reserva.data_saida;
    tr.appendChild(tdData);

    const tdAcoes = document.createElement("td");

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "Deletar";

    botaoDeletar.addEventListener("click", () => deletarItem(reserva.id));
    tdAcoes.appendChild(botaoDeletar);
    tr.appendChild(tdAcoes);
    document.getElementById("tabela-corpo").appendChild(tr);
  });
}

function deletarItem(id) {
  fetch(`http://localhost:3000/reservas/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao deletar a reserva");
      }
      alert("Deletado com sucesso");
      document.getElementById("tabela-corpo").innerHTML = "";
      pegarListaReservas();
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao deletar a reserva");
    });
}

function pegarListaReservas() {
  fetch("http://localhost:3000/reservas")
    .then((response) => {
      if (response.ok === false) {
        throw new Error();
      }
      return response.json();
    })
    .then((dados) => {
      dadosReserva = dados;
      gerarLinhasTabela();
    })
    .catch((error) => {
      console.log(error);
      alert("Falha ao tentar listar as reservas");
    });
}

window.onload = pegarListaReservas;
