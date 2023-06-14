/*2 - O cardápio de uma lancheria é o seguinte:
Especificação Código Preço
Cachorro quente 100 1,20
Bauru simples 101 1,30
Bauru com ovo 102 1,50
Hambúrger 103 1,20
Cheeseburguer 104 1,30
Refrigerante 105 1,00
Escrever um algoritmo que leia o código do item pedido, a quantidade e calcule o valor a ser pago
por aquele lanche. Considere que a cada execução somente será calculado um item.*/

var codigoDoPedido = prompt(`Digite o código do produto que deseja:
Código      Produto           Valor
  100     🌭Cachorro quente  R$1,20
  101     🥪Bauru simples       R$1,30
  102     🥪Bauru com ovo     R$1,50
  103     🍔Hambúrger           R$1,20
  104     🍔Cheeseburguer     R$1,30
  105     🥤Refrigerante          R$1,00
`);
var QuantidadeDoPedido = Number(prompt("Quantas unidades você deseja?"));

switch (codigoDoPedido) {
  case "100": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Cachorro quente e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.2
      ).toFixed(2)}.`
    );
    break;
  }
  case "101": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Bauru simples e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.3
      ).toFixed(2)}.`
    );
    break;
  }
  case "102": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Bauru com ovo e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.5
      ).toFixed(2)}.`
    );
    break;
  }
  case "103": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Hambúrguer e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.2
      ).toFixed(2)}.`
    );
    break;
  }
  case "104": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Cheeseburguer e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.3
      ).toFixed(2)}.`
    );
    break;
  }
  case "105": {
    console.log(
      `Você escolheu ${QuantidadeDoPedido} unidade(s) de Refrigerante e o valor total a ser pago é de R$${(
        QuantidadeDoPedido * 1.0
      ).toFixed(2)}.`
    );
    break;
  }
  default: {
    console.log("Código do produto inválido. Por favor, tente novamente.");
  }
}
