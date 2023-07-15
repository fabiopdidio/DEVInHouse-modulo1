class Personagem {
  percentualVida = 100;

  constructor(nome) {
    this.nome = nome;
  }
  sofreuDano(percentualDano) {
    const novoPercentualVida = this.percentualVida - percentualDano;
    this.percentualVida = novoPercentualVida > 0 ? novoPercentualVida : 0;
  }
  usouKitMedico() {
    const novoPercentualVida = (this.percentualVida += 10);
    this.percentualVida = novoPercentualVida < 100 ? novoPercentualVida : 100;
  }
}

export default Personagem;
