<template>
  <div>
    <h1>FormMedicamentos</h1>
    <FormularioNovoMedicamento @cadastrar="AdicionarMedicamento" />
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import FormularioNovoMedicamento from "../components/FormularioNovoMedicamento.vue";
export default {
  components: {
    FormularioNovoMedicamento,
  },
  methods: {
    AdicionarMedicamento(nome, laboratorio, preco) {
      //adicionar validações para avisar o usuario a não deixar dados vazios
      if (nome == "" || laboratorio == "" || preco == 0) {
        alert("Preencha todos os dados");
        return;
      }
      const novoMedicamento = {
        id: uuidv4(), //uuidv4 gera um id aleatório
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false,
      };
      this.listaMedicamentos.push(novoMedicamento); // adiciona o novo medicamento na lista
    },
  },
};
</script>
<style></style>
