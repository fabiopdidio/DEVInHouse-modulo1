function somarNumeros(...numeros) {  // Funcao com rest
  let soma = 0; // Variavel para acumular valores
  for (let i = 0; i < numeros.length; i++) {     // Loop: inicio; condicao; expressao final
    soma += numeros[i]; // soma ao valor atual e retorna o resultado
  }
  return soma; // mostra o resultado da soma de todos numeros do array
}

const numerosInput = prompt("Digite os números que deseja somar separados por vírgula:");
const numerosArray = numerosInput.split(",").map((numero) => parseInt(numero.trim()));
const resultado = somarNumeros(...numerosArray);
alert("A soma dos numeros e: " + resultado);
