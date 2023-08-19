<!--
  PASSOS PARA CRIAR UM COMPONENTE:
  - 1 [x] - crie um arquivo dentro da pasta components
  - 2 [x] - dê o nome ao arquivo usando PascalCase
    Obs: PascalCase significa que as primeiras letras de cada palavra
    sempre serão maiúsculas.
  - 3 [x] - Escreva a estrutura base do arquivo Vue (Single File Component
  - template | script | style)
  - 4* [x] - Se for usar props, defina o array de props
    - 4.1* - [x] Defina onde as props devem ser utilizadas
    - 5 [x] - importe o componente no local que será utilizado
    import NomeDoComponente from "./components/NomeDoComponente.vue"
  - 6 [x] - Registre o componente na propriedade components:
    components: { // esse fica dentro do export default
      NomeDoComponente
    }
    6.1 [] - Adicione o componente no template no arquivo onde ele foi importado
  - 7* [] - Se usou props, passe os valores das props para serem utilizados
-->

<template>
  <Transition>
    <v-card elevation="5" class="ma-3">
      <template v-slot:title>
        <div class="d-flex justify-end">
          <v-btn
            variant="text"
            :icon="favorito ? 'mdi-heart' : 'mdi-heart-outline'"
            color="pink-lighten-1"
            @click="$emit('favoritar', id)"
          ></v-btn>
        </div>
      </template>
      <v-card-text class="d-flex flex-column">
        <img
          :width="120"
          src="https://dmvfarma.vtexassets.com/arquivos/ids/196865/caixa-medicamento-2021.png?v=637695586068000000"
          alt="Imagem do medicamento"
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
<style scoped>
</style>
