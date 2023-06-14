/*Cálculo do FGTS baseado no salário bruto recebido*/

var salarioBruto = Number(prompt("Digite seu salário"));
var resultado = salarioBruto * 0.08;
var resultadoAnual = resultado * 12;

console.log("Seu FGTS é" + resultado);
console.log("No ano você receberá: " + resultadoAnual);
