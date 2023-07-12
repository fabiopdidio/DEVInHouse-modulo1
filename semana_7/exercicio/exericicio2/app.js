class Fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia;
    this.preco = preco;

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
