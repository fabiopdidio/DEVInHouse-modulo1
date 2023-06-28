//rest=... (recebe quantidade indefinida de parametros
function somarNumeros(...numeros) {
  let soma = 0; //variavel para acumular os numeros do array

  for (let i = 0; i < numeros.length; i++) {
    //loop para percorrer o array
    soma += numeros[i]; //adiciona cada valor
  }

  return soma; //retorna a soma de todos numeros do array
}

let numerosInput = prompt(
  "Digite os números que deseja somar separados por vírgula:"
);

let numerosAray = numerosInput
  .split(",")
  .map((numero) => parseInt(numero.trim(), 10));

let resultado = somarNumeros(...numerosAray);

alert(resultado);
