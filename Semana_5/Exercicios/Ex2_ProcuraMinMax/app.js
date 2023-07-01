function procuraMinMax(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return {
    menor: min,
    maior: max,
  };
}

const numeros = prompt(
  "Digite os números que deseja verificar separados por vírgula:"
);
const numerosArray = numeros.split(",").map((array) => parseInt(array.trim()));
const resultado = procuraMinMax(numerosArray);

if (resultado.menor !== undefined && resultado.maior !== undefined) {
  alert("Menor valor: " + resultado.menor + ", Maior valor: " + resultado.maior);
} else {
  alert("Não é possível encontrar");
}
