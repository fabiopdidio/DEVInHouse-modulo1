/*
Crie uma classe Colaborador para representar uma pessoa colaboradora de uma empresa, contendo os atributos cpf, nomeCompleto e salario.

Implemente também um método promover(percentual) que recebe como parâmetro um percentual, devendo o salário ser aumentado pelo percentual indicado no argumento do método.

Crie e utilize um objeto desta classe para testar a implementação.*/

class Colaborador {
  constructor(cpf, nomeCompleto, salario) {
    // Construtor recebe os parâmetros
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }
  promover(percentual) {
    const aumento = this.salario * (percentual/100);
    this.salario += aumento; // Soma o salário e o aumento
  }
}

const ada = new Colaborador("528.442.040-31", "Ada Lovelace", 1000);
console.log(ada.salario); // 1000
ada.promover(50);
console.log(ada.salario); // 1500
