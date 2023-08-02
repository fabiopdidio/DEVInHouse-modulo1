/*Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o
cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o cargo de um funcionário e
calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber
40% de aumento. Mostre o salário antigo, o novo salário e a diferença.
Código Cargo Percentual
101 Gerente 10%
102 Engenheiro 20%
103 Técnico 30%*/

var nome = prompt("Qual seu nome?");
var cargo = prompt(`Digite o código do seu cargo:
101 - Gerente
102 - Engenheiro
103 - Técnico`);
var salario = Number(prompt("Digite o seu salário atual"));

switch (cargo) {
  case "101": {
    console.log(
      `Olá Gerente ${nome}, seu novo salário é de R$${(salario * 1.1).toFixed(
        2
      )}, com o aumento de 10% você receberá R$${(
        salario * 1.1 -
        salario
      ).toFixed(2)} a mais`
    );
    break;
  }
  case "102": {
    console.log(
      `Olá Engenheiro ${nome}, seu novo salário é de R$${(
        salario * 1.2
      ).toFixed(2)}, com o aumento de 20% você receberá R$${(
        salario * 1.2 -
        salario
      ).toFixed(2)} a mais`
    );
    break;
  }
  case "103": {
    console.log(
      `Olá Técnico ${nome}, seu novo salário é de R$${(salario * 1.3).toFixed(
        2
      )}, com o aumento de 30% você receberá R$${(
        salario * 1.3 -
        salario
      ).toFixed(2)} a mais`
    );
    break;
  }
  default: {
    console.log(
      `Olá ${nome}, seu novo salário é de R$${(salario * 1.4).toFixed(
        2
      )}, com o aumento de 40% você receberá R$${(
        salario * 1.4 -
        salario
      ).toFixed(2)} a mais`
    );
  }
}
