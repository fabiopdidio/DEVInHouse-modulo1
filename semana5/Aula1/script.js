console.log("m1205a1"); //Mostra no console

/* Exemplo de função básica
f(x) = x * 2
f(2) = 2 * 2
f(2) = 4 */

/* Mesmo exemplo de cima mas com a sintaxe do js
function f(x) {
  const calculo = x * 2;
  return calculo;
}
const resultado = f(2);
console.log(resultado); */

/* Exemplo de função matematica com 2 números
f(x, y) = x * 2 - y
f(2, 3) = 2 * 2 - 3
f(2, 3) = 4 - 3
f(2, 3) = 1 */

/* Mesmo exemplo de cima mas com a sintaxe do js*/
function f(x, y) {
  const calculo = x * 2 - y;
  return calculo;
}
const resultado = f(2, 3);
console.log(resultado);

/* Exemplo de funcao efemera/anonima (raramente utilizado) */
(function () {
  console.log("Executou a funcao");
})();

/* Funcao Arrow nao tem palavra function*/
funcaoArrow = () => {
  console.log("Funcao Arrow");
};
funcaoArrow();

/* Exemplo de funcao arrow*/
funcaoArrow = (a) => {
  return "Funcao arow. " + a;
};
console.log(funcaoArrow("fabio"));

/* Funcao Arrow simplificada */
funcaoArrow = (a) => "Funcao Arrow. " + a;
console.log(funcaoArrow("fabio"));
