<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="cadastrarMedicamento" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";

export default {
  components: {
    Header,
    FormularioNovoMedicamento,
  },
  data() {
    return {
      listaMedicamentos: [],
    };
  },
  methods: {
    AdicionarMedicamento(nome, laboratorio, preco) {
      if (nome == "" || laboratorio == "" || preco == 0) {
        alert("Preencha todos os dados");
        return;
      }
      const novoMedicamento = {
        id: uuidv4,
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false,
      };
      this.listaMedicamentos.push(novoMedicamento);
    },
  },
};
</script>

<style scoped></style>
