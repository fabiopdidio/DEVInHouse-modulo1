function calculaTabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} * ${i}= ${numero * i}`);
  }
}
const numero = prompt("Informe um número");
calculaTabuada(numero);
