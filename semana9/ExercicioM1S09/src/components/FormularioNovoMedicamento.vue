<template>
  <div class="formulario">
    <h2>Formulário de cadastro de medicamentos</h2>
    <label for="nome">Nome</label>
    <input
      type="text"
      id="nome"
      placeholder="Informe o nome do medicamento"
      v-model="medicamento"
    />

    <label for="laboratorio">Laboratório</label>
    <input
      type="text"
      id="laboratorio"
      placeholder="Informe o nome do laboratório"
      v-model="laboratorio"
    />

    <label for="nome">Preço</label>
    <input
      type="text"
      id="number"
      placeholder="Informe o preço"
      v-model="preco"
    />

    <button @click="$emit('cadastrar', medicamento, laboratorio, preco)" class="button">Cadastrar novo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medicamento: "",
      laboratorio: "",
      preco: 0,
    };
  },
};
</script>

<style>
.button {
  background-color: rgb(83, 82, 82);
  color: white;
  border: none;
  border-radius: 2px;
  padding: 3px;
  margin-left: 4px;
}
.formulario {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
