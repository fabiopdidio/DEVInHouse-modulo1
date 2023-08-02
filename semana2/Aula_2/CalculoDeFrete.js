/* Cálculo do custo de frete (peso, distância e custo)
Taxa fixa de R$0,50/Kg e R$0,10/Km, total= custoPeso + CustoKm*/

var pesoProduto = Number(prompt("Digite o peso do produto em Kg"));
var distanciaTrajeto = Number(prompt("Digite oa distância do trajeto em Km"));

var custoPeso = pesoProduto * 0.5;
var custoDistancia = distanciaTrajeto * 0.1;
var custoFrete = custoPeso + custoDistancia;

console.log("O custo total é: R$" + custoFrete.toFixed(2));
