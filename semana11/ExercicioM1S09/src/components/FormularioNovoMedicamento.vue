<template>
  <div>
    <div class="row ms-5 me-5 mt-5">
      <h3>Formulário de cadastro de medicamentos</h3>
      <div class="col-md-4 mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input
          type="text"
          placeholder="Informe o nome do medicamento"
          id="nome"
          class="form-control"
          v-model="medicamento"
        />
      </div>
      <div class="col-md-4 mb-3">
        <label for="laboratorio" class="form-label">Laboratório</label>
        <input
          type="text"
          placeholder="Informe o nome do laboratório"
          id="laboratorio"
          class="form-control"
          v-model="laboratorio"
        />
      </div>
      <div class="col-md-4 mb-3">
        <label for="preco" class="form-label">Preço</label>
        <input
          type="number"
          placeholder="Informe o preço do medicamento"
          id="preco"
          class="form-control"
          v-model="preco"
        />
      </div>
      <div class="col-md-4 mb-3">
        <button class="btn btn-primary mt-3" @click="$emit('cadastrar', medicamento, laboratorio, preco)">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<!--<button @click="$emit('cadastrar', medicamento, laboratorio, preco)" class="button">Cadastrar novo</button>-->

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

<style></style>
