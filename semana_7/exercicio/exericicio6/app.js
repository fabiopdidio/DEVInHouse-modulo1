class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada; // i
    this.tempo = tempo; // t
  }
  JurosSimples() {
    // J = C * i * t
    const juros = this.capitalInicial * this.taxaAplicada * this.tempo;
    return juros;
  }
  JurosCompostos() {
    // M = C * (1 + i) ** t
    const montante =
      this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
    const juros = montante - this.capitalInicial;
    return juros;
  }
}
/* 
Teste 1:
Aplicação de R$10.000 a uma taxa de 7% ao mês por 24 meses
*/
const teste1 = new Juros(10000, 0.07, 24);
const simples1 = teste1.JurosSimples();
const compostos1 = teste1.JurosCompostos();
console.log(simples1.toFixed(2)); 
console.log(compostos1.toFixed(2));
/* 
Teste 2:
Aplicação de R$10.000 a uma taxa de 15% ao mês por 120 meses
*/
const teste2 = new Juros(10000, 0.15, 120);
const simples2 = teste2.JurosSimples();
const compostos2 = teste2.JurosCompostos();
console.log(simples2.toFixed(2)); 
console.log(compostos2.toFixed(2));

