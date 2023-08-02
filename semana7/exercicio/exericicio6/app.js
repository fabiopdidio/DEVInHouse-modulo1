import Juros from "./Juros.js";

const aplicacaoA = new Juros(10000, 0.07, 24);
const apASimples = aplicacaoA.calcularJurosSimples();
console.log(apASimples); // R$ 26.800,00
const apAComposto = aplicacaoA.calcularJurosCompostos();
console.log(apAComposto); // R$ 50.723,67

const aplicacaoB = new Juros(10000, 0.15, 10);
const apBSimples = aplicacaoB.calcularJurosSimples();
console.log(apBSimples); // R$ 25.000,00
const apBComposto = aplicacaoB.calcularJurosCompostos();
console.log(apBComposto); // R$ 40.455,58