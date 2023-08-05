<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="cadastrarMedicamento" />
    <div class="container">
      <CardMedicamento
        @favoritar="FavoritarMedicamento"
        nome="Dipirona"
        laboratorio="Clamed"
        preco="5,00"
        id="1"
      />
    </div>
  </div>
</template>

<script>
// importar todos componentes
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
      // criação de array vazio para ser completo ao usuario cadastrar novo medicamento
      listaMedicamentos: [],
    };
  },
  methods: {
    AdicionarMedicamento(nome, laboratorio, preco) {
      //adicionar validações para avisar o usuario a não deixar dados vazios
      if (nome == "" || laboratorio == "" || preco == 0) {
        alert("Preencha todos os dados");
        return;
      }
      const novoMedicamento = {
        id: uuidv4, //uuidv4 gera um id aleatório
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false,
      };
      this.listaMedicamentos.push(novoMedicamento); // adiciona o novo medicamento na lista
    },
    FavoritarMedicamento(id) {
      alert(id);
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
