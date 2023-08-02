export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada; // i
    this.tempo = tempo; // t
  }
  calcularJurosSimples() {
    // J = C * i * t
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const J = C * i * t;
    return (J + C).toFixed(2);
  }

  calcularJurosCompostos() {
    // M = C * (1 + i) ** t
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const M = C * (1 + i) ** t;
    return M.toFixed(2);
  }
}
