<template>
  <Header />
  <div class="container">
    <CardMedicamento
      v-if="!!listaMedicamentos"
      v-for="medicamento in listaMedicamentos"
      :key="medicamento.id"
      @favoritar="FavoritarMedicamento"
      :nome="medicamento.nome"
      :laboratorio="medicamento.laboratorio"
      :preco="medicamento.preco"
      :id="medicamento.id"
    />
  </div>
  <router-view></router-view>
</template>

<script>
// importar todos componentes
import Header from "./components/Header.vue";
import CardMedicamento from "./components/CardMedicamento.vue";

export default {
  components: {
    Header,
    CardMedicamento,
  },
  data() {
    return {
      // criação de array vazio para ser completo ao usuario cadastrar novo medicamento
      listaMedicamentos: [],
    };
  },
  methods: {
    FavoritarMedicamento(id) {
      this.listaMedicamentos = this.listaMedicamentos.map((item) => {
        if (item.id == id) {
          item.favorito = !item.favorito;
        }
        return item;
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 1em;
}
</style>
