/* Carta de pedido de férias*/

var nomeFuncionario = prompt("Digite o nome do funcionário");
var dataInicio = prompt("Digite a data de início das férias");
var dataFim = prompt("Digite a data de fim das férias");

var cartaFerias = `Caro responsável,
Gostaria de solicitar minhas férias:
Nome do funcionário: ${nomeFuncionario}
Data de início ${dataInicio}
Data de fim ${dataFim}
Agradeço a atenção.
Atenciosamente, ${nomeFuncionario}`;

console.log(cartaFerias);
