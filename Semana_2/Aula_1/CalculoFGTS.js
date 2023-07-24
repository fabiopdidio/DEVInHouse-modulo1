/*
Cálculo do FGTS baseado no salário bruto recebido
*/
const salarioBruto = Number(prompt("Digite seu salário"));
const resultado = salarioBruto * 0.08;
const resultadoAnual = resultado * 12;

console.log("Seu FGTS é" + resultado);
console.log("No ano você receberá: " + resultadoAnual);
