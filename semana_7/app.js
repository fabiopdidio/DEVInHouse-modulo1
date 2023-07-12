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
