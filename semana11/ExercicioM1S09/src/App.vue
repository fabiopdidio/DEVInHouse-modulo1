<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="adicionarMedicamento" />
    <div class="container">
      <CardMedicamento
        v-if="listaMedicamentos.length"
        v-for="medicamento in listaMedicamentos"
        :key="medicamento.id"
        @favoritar="favoritarMedicamento"
        :nome="medicamento.nome"
        :laboratorio="medicamento.laboratorio"
        :preco="medicamento.preco"
        :id="medicamento.id"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";
import CardMedicamento from "./components/CardMedicamento.vue";

export default {
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento,
  },
  data() {
    return {
      listaMedicamentos: [],
    };
  },

  methods: {
    adicionarMedicamento(nome, laboratorio, preco) {
      if (!nome || !laboratorio || preco <= 0) {
        alert("Preencha todos os dados corretamente.");
        return;
      }
      const novoMedicamento = {
        id: uuidv4(),
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false,
      };
      this.listaMedicamentos.push(novoMedicamento);
    },
    favoritarMedicamento(id) {
      this.listaMedicamentos = this.listaMedicamentos.map((item) => {
        if (item.id === id) {
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
