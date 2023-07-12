class Personagem {
  constructor(nome, percentualVida) {
    this.nome = nome;
    this.percentualVida = 100;
  }
  sofreuDano(percentualDano) {
    this.percentualVida -= percentualDano;
  }
  usouKitMedico() {
    this.percentualVida += 10;
  }
}

const alyx = new Personagem("Alyx");
console.log(alyx.percentualVida); // 100
alyx.sofreuDano(50);
console.log(alyx.percentualVida); // 50
alyx.usouKitMedico();
console.log(alyx.percentualVida); // 60
