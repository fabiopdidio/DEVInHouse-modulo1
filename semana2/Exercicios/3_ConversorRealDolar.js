/*- Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre
quantos dólares ela pode comprar. Considere US$1,00 = R$4,92*/

var real = Number(
  prompt("Bem-vido, quantos reais você tem na sua carteira?")
).toFixed(2);
var realParaDolar = (real / 4.92).toFixed(2);

console.log(`Convertendo R$${real} para dólar você tem U$${realParaDolar}.`);
