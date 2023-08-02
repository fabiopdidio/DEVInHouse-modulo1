/*Um usuário deseja um algoritmo onde possa escolher que tipo de média deseja calcular a partir
de 3 notas. Faça um algoritmo que leia as notas, a opção escolhida pelo usuário e calcule a média.
1 -aritmética
2 -ponderada (3,3,4)*/

var formulaDesejada = prompt(
  "Você deseja calcular a média aritmética ou ponderada?"
);
var nota1 = Number(prompt("Digite a primeira nota"));
var nota2 = Number(prompt("Digite a segunda nota"));
var nota3 = Number(prompt("Digite a terceira nota"));
var peso1 = 3;
var peso2 = 3;
var peso3 = 4;

switch (formulaDesejada) {
  case "aritmética": {
    console.log(
      `A média aritmética do aluno é de ${((nota1 + nota2 + nota3) / 3).toFixed(
        1
      )}`
    );
    break;
  }
  case "ponderada": {
    console.log(
      `A média ponderada do aluno é de ${(
        (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) /
        (peso1 + peso2 + peso3)
      ).toFixed(1)}`
    );
    break;
  }
}
