class Colaborador {
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }
  promover(percentual) {
    const aumento = this.salario * (percentual / 100);
    this.salario += aumento;
  }
}
const ada = new Colaborador("528.442.040-31", "Ada Lovelace", 1000);
console.log(ada.salario); // 1000
ada.promover(50);
console.log(ada.salario); // 1500
