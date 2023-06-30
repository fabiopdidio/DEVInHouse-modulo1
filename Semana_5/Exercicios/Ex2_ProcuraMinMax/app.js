function procuraMinMax(array) {
  if (array.length === 0) {
    return "Nao foi possivel encontrar";
  }
  let menor = array[0];
  let maior = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return {
    menor: menor,
    maior: maior,
  };
}

const numeros = prompt(
  "Digite os números que deseja verificar separados por vírgula:"
);
const numerosArray = numeros.split(",").map((array) => parseInt(array.trim()));
const resultado = procuraMinMax(numerosArray);

alert("Menor valor: " + resultado.menor + ", Maior valor: " + resultado.maior);
