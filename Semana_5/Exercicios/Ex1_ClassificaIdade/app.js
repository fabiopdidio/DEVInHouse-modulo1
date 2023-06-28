function classificaIdade(idade) {
  if (idade <= 15) {
    alert("Pessoa Jovem");
  } else if (idade >= 16 && idade <= 64) {
    alert("Pessoa Adulta");
  } else {
    alert("Pessoa Idosa");
  }
}

const classificarButton = document.getElementById("classificarButton");
classificarButton.addEventListener("click", function () {
  const idadeInput = document.getElementById("idadeInput");
  const idade = Number(idadeInput.value);
  classificaIdade(idade);
});
