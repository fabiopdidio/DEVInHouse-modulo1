/*1 - Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes
categorias:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos*/

var idade = Number(prompt("Digite sua idade"));

if (idade >= 5 && idade <= 7) {
  console.log(
    `Você tem ${idade} anos, portanto competirá na categoria Infantil A`
  );
} else if (idade >= 8 && idade <= 10) {
  console.log(
    `Você tem ${idade} anos, portanto competirá na categoria Infantil B`
  );
} else if (idade >= 11 && idade <= 13) {
  console.log(
    `Você tem ${idade} anos, portanto competirá na categoria Juvenil A`
  );
} else if (idade >= 14 && idade <= 17) {
  console.log(
    `Você tem ${idade} anos, portanto competirá na categoria Juvenil B`
  );
} else if (idade > 18) {
  console.log(`Você tem ${idade} anos, portanto competirá na categoria Adulto`);
} else console.log(`Você não tem a idade mínima para competir`);
