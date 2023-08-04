<template>
  <div>
    <h2>Formulário de cadastro de medicamentos</h2>
    <label for="nome">Nome:</label>
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

    <label for="nome">Preco</label>
    <input
      type="text"
      id="number"
      placeholder="Informe o preço"
      v-model="preco"
    />

    <button @click="$emit('cadastrar')">Cadastrar novo</button>
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
