// "USE STRICT"
"use strict";
// scripts de tipo modulo, possuem automaticamente
// escopo USE STRICT
// <script src="app.js" type="module"></script>
// sem a necessidade de declarar no inicio do arquivo

// use strict impede que variaveis não explicitamente
// definidas sejam usadas
//hahahaDeRaioLaser = "batata";
//console.log(hahahaDeRaioLaser);

/* console.log("m1s05a2");
 */
/* Variável com texto*/
/* const texto = "texto";
console.log(texto); */

/* Variável com vetor(array)*/
/* const vetor = ["arroz", "feijao", "batata"];
console.log(vetor); */

/* Mostrando só um elemento de uma variável com vetor(array)*/
/* const vetor = ["arroz", "feijao", "batata"];
console.log(vetor[0]); */

//const vetor = ["arroz", "feijao", "batata"];
//vetor.push("carne") /* Acrescentar mais um elemento ao vetor*/
//vetor[0] = "aipim" /* Troca um elemento ao vetor*/
//console.log(vetor);
//console.log(vetor.length); /*Diz quantos elementos tem no vetor*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0][0]); /*Acessa dado epecífico*/

//OBJETOS:

const qqrnome = { bla: 33 }; //Cria objeto
qqrnome.ble = 66; //Acrescenta na chave-valor
console.log(qqrnome.bla); //Acessa valor na chave bla

//array com objeto:
const listaPessoas = [
  {
    id: 1,
    nome: "Fabio",
    profissao: "Nutricionista",
  },
  {
    id: 2,
    nome: "Didio",
    profissao: "Estudante",
  },
];
console.log(listaPessoas[1].profissao);

// ESCOPO
// escopo de funcao
// var obedece apenas escopo de funcao
function definirLargura() {
  var largura = 100;
  console.log(largura);
}
//definirLargura();
//console.log(largura);

// escopo de bloco
// var não é contida em escopo de bloco
if (true) {
  var largura = 999;
  //console.log(largura);
}
//console.log(largura);

// const e let são contidas em escopo de bloco
// e também escopo de funcao
if (true) {
  const comprimento = 111;
  //console.log(comprimento);
}
// erro pois comprimento nao existe fora do bloco
//console.log(comprimento);

// HOISTING/IÇAMENTO
// "sobe" a definição de funcoes e vars
// para poder utilizar antes da definição
//teste();
function teste() {
  console.log("TESTE_EXECUTOU");
}

// REST
function calcula(a, b, ...batata) {
  console.log(a, b, batata);
}
//calcula(1, 3, 8, 2, 6);

// SPREAD
const exemploSpread = [4, 5, 6, 7, 9];

calcula(...exemploSpread);
// equivalente à
calcula(4, 5, 6, 7, 9);
