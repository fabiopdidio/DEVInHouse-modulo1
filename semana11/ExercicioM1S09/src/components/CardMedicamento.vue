<template>
  <div class="card row ms-5 mt-3" style="width: 18rem">
    <div class="card-body">
      <img
        src="https://cdn-icons-png.flaticon.com/512/994/994920.png"
        class="card-img-top"
        alt="Imagem do medicamento"
        width="50"
      />

      <span v-if="favorito" class="badge bg-success">Favorito</span>
      <h5 class="card-title mt-3">Medicamento: {{ nome }}</h5>
      <h5 class="card-text">Laboratório: {{ laboratorio }}</h5>
      <h5 class="card-text">Preço: R${{ preco }},00</h5>
      <button @click="$emit('favoritar', id)" class="btn btn-primary ms-0">
        Favoritar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nome", "laboratorio", "preco", "favorito", "id"],
};
</script>

<style scoped></style>
