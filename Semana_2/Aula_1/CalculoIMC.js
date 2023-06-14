/* Cálculo do IMC com if/else if/else mostrando atual situação ao usuário*/

var peso = Number(prompt("Digite seu peso"));
var altura = Number(prompt("Digite sua altura"));
var imc = peso / (altura * altura);

console.log(imc);

if (imc <= 18.4) {
  console.log("Você está abaixo do peso!");
} else if (imc <= 18.5 && imc < 24.9) {
  console.log("Você está com o peso ideal!");
} else if (imc <= 25 && imc < 29.9) {
  console.log("Você está acima do peso!");
} else {
  console.log("Você está obeso!");
}
