<template>
  <Transition>
    <v-card elevation="5" class="ma-3">
      <!--Adiciona sombra e margem ao card-->
      <template v-slot:title>
        <div class="d-flex justify-end">
          <v-btn
            variant="text"
            :icon="favorito ? 'mdi-heart' : 'mdi-heart-outline'"
            color="red-darken-4"
            @click="$emit('favoritar', id)"
          ></v-btn>
          <!--Cria um botão no formato de coração e ao ser clicado muda de cor, também chamando a função-->
        </div>
      </template>
      <v-card-text class="d-flex flex-column">
        <img
          :width="120"
          src="https://farmaceuticodigital.com/wp-content/uploads/2016/05/medicamentos1.jpg"
          alt="Imagem do medicamento"
          class="mb-5"
        />
        <p><span class="font-weight-bold">Nome:</span> {{ nome }}</p>
        <p>
          <span class="font-weight-bold">Laboratório:</span> {{ laboratorio }}®
        </p>
        <p><span class="font-weight-bold">Preço:</span> R${{ preco }},00</p>
      </v-card-text>
    </v-card>
  </Transition>
</template>
<script>
export default {
  props: ["nome", "laboratorio", "preco", "favorito", "id"],
};
</script>
<style scoped></style>
