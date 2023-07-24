/*
Cálculo do FGTS baseado no salário bruto recebido
*/

let salarioBruto = Number(prompt("Digite seu salário"));
let resultado = salarioBruto * 0.08;
let resultadoAnual = resultado * 12;

console.log("Seu FGTS é" + resultado);
console.log("No ano você receberá: " + resultadoAnual);
