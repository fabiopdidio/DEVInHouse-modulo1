<template>
  <div class="card row ms-5 mt-3" style="width: 18rem;">
    <img
      src="https://cdn-icons-png.flaticon.com/512/994/994920.png"
      class="card-img-top"
      alt="Imagem do medicamento"
    />
    <div class="card-body">
      <button @click="$emit('favoritar', id)" class="btn btn-primary">Favoritar</button>
      <span v-if="favorito" class="badge bg-success">Favorito</span>
      <h5 class="card-title">{{ nome }}</h5>
      <p class="card-text">Laboratório: {{ laboratorio }}</p>
      <p class="card-text">Preço: {{ preco }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nome", "laboratorio", "preco", "favorito", "id"],
};
</script>

<style scoped>
</style>
