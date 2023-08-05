<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="cadastrarMedicamento" />
  </div>
</template>

<script>
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
    cadastrarMedicamento() {},
  },
};
</script>

<style scoped></style>
