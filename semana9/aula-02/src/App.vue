<template>
  <div>
    <h1>Calculadora de IMC</h1>
    <input type="number" placeholder="Altura" v-model="altura" />
    <input type="number" placeholder="Peso" v-model="peso" />
    <button @click="calcularIMC">Calcular</button>
    <h2>{{ resultado }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
      resultado: "",
    };
  },
  methods: {
    calcularIMC() {
      if (this.peso == 0 || this.altura == 0) {
        alert("Preencha todos os campos");
        return;
      }
      let imc = (this.peso / this.altura ** 2).toFixed(2);

      if (imc < 18.5) {
        this.resultado = "Abaixo do peso ideal";
      } else if (imc >= 18.5 && imc <= 24.9) {
        this.resultado = "Peso ideal";
      } else if (imc >= 25 && imc <= 29.9) {
        this.resultado = "Sobrepeso";
      } else if (imc >= 30 && imc <= 39.9) {
        this.resultado = "Obesidade grau II";
      } else if (imc >= 40) {
        this.resultado = "Obesidade grau III";
      }
    },
  },
};
</script>

<style></style>
