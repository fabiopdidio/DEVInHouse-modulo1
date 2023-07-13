class CalculadoraDeArea {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }
  calcular() {
    if (this.tipo === "triangulo") {
      return (this.base * this.altura) / 2;
    } else {
      return this.base * this.altura;
    }
  }
}

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28
