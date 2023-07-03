function somarNumeros(...numeros) {
  let soma = 0;
  numeros.forEach((num) => {
    soma += num;
  });
  return soma;
}

const numerosInput = prompt(
  "Digite os números que deseja somar separados por vírgula:"
);
const numerosArray = numerosInput
  .split(",")
  .map((numero) => parseInt(numero.trim()));
const resultado = somarNumeros(...numerosArray);
alert("A soma dos números é: " + resultado);
