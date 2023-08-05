<template>
  <div class="card">
    <button @click="$emit('favoritar', id)">Favoritar</button>
    <span v-if="favorito">Favorito</span>
    <img
      :width="120"
      src="https://cdn-icons-png.flaticon.com/512/994/994920.png"
      alt="imagem do medicamento"
    />
    <span>Nome: {{ nome }}</span>
    <span>Laboratorio: {{ laboratorio }}</span>
    <span>Preço: {{ preco }}</span>
  </div>
</template>

<script>
export default {
  props: ["nome", "laboratorio", "preco", "favorito", "id"],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: calc(100% / 4) -2em;
  margin: 1em;
  background-color: #c4c4c4;
}
</style>
